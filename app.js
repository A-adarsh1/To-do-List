let ul = document.querySelector(".list-parent");
let inputBox = document.querySelector("#input-box");
let addBtn = document.querySelector("#add-btn");

const addList = () => {
  if(inputBox.value === ""){
    alert("You must add something!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }
  inputBox.value = '';
  saveData();
} 

addBtn.addEventListener("click", addList);



ul.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", ul.innerHTML)
}

function showLists(){
  ul.innerHTML = localStorage.getItem("data");
}
showLists();