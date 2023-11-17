const listContainer = document.querySelector(".list__container"),
  form = document.querySelector(".list__form"),
  listInput = document.querySelector(".list__input"),
  delIcon = document.querySelector(".fa-xmark"),
  searchInput = document.querySelector(".list__search"),
  formBtn = document.querySelector(".list__btn"),
  listOptions = document.querySelector(".list__options");


formBtn.addEventListener("click", (e) => {
  let textInput = searchInput.value.trim();
  if (textInput === "" || textInput == null) {
    listInput.classList.add("border");
  } else {
    listInput.classList.remove("border");
    sendInput(textInput);
    searchInput.value = "";
  }
  saveData()
});

searchInput.addEventListener("input", (e) => {
  if (searchInput.value.trim()) {
    delIcon.style.opacity = "1";
  } else {
    delIcon.style.opacity = "0";
  }
});

function sendInput(text) {
  listOptions.innerHTML += `
  <li class="list__option">
            <i class="fa-regular fa-circle" onclick="checkData(this)"></i>
            <span class="list__option-text">${text}</span>
            <div class="list__option-button">
               <i class="fa-solid fa-pen-to-square"></i>
               <i class="fa-regular fa-trash-can"></i>
            </div>
  </li>
  `;
  let deleteTask = document.querySelector(".fa-trash-can");
  deleteTask.addEventListener("click",(e) => {
    e.target.parentElement.parentElement.remove()
    saveData()
  })
}

function checkData(e){
  let checkText = e.parentElement;
  let circleIcon = checkText.querySelector(".fa-circle");
  let textSpan = checkText.querySelector(".list__option-text");
  textSpan.classList.toggle("active")
  circleIcon.classList.toggle("fa-solid")
  saveData()
}

delIcon.addEventListener("click", (e) => {
  searchInput.value = "";
});

function saveData(){
  localStorage.setItem("list",listOptions.innerHTML)
}

function showData(){
  listOptions.innerHTML = localStorage.getItem("list");
}
showData()