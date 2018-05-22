document.addEventListener('DOMContentLoaded', () => {
  const listDiv = document.getElementById("app-content");
  // const app = new TaskLister();
});

let listForm = document.getElementById("create-list-form");
let taskForm = document.getElementById("create-task-form");
let appContent = document.getElementById("app-content");
let validInput = document.getElementById("new-list-title");

let listArray = {}
let listId = 0

function unhide(clickedButton, divId) {
  var item = document.getElementById(divId);
  if (validInput.value === ""){
    alert("Task List cannot be empty")
    return;
  }

  if (item){
    if(item.className=='hidden'){
      item.className = 'unhidden';
    }
  }}



listForm.addEventListener("submit",function(e) {
  e.preventDefault();
  let titleInput = document.getElementById("new-list-title");
  let lists = document.getElementById("lists")

  if (Object.values(listArray).includes(validInput.value)){
    alert("Task Name already exists. \n please try again!")
    titleInput.value = ""; //resets firls to blank
    return;
  } else{
  let option =document.createElement("option");
  let divList = document.createElement("div");
  let h2 = document.createElement("h2");
  let listButton = document.createElement("button");
  let ul = document.createElement("ul")

  document.getElementById("parent-list").add(option);
  listButton.setAttribute("class","delete-list")
  listButton.innerText = "x";

  h2.innerText = titleInput.value //inputs the title name text
  option.text= titleInput.value //inputs title name to drop down text

  ul.setAttribute("id", titleInput.value)
  h2.appendChild(listButton);
  divList.appendChild(h2)
  divList.appendChild(ul)
  lists.appendChild(divList) //appending new div to lists div

  listArray[`${++listId}`]= titleInput.value

  listButton.addEventListener('click',()=> {divList.remove(); option.remove(); if (lists.children.length === 0){
    appContent.setAttribute('class',"hidden")
  }
  })
  titleInput.value = ""; //resets firls to blank
}
});

//adds item to task info
taskForm.addEventListener("submit", function(e){
  e.preventDefault();

  let selection = document.getElementById("parent-list")
  let taskInput = document.getElementById("new-task-description");
  let taskPriority = document.getElementById("new-task-priority");
  let listIdName = document.getElementById(selection.value) //listIdName
  debugger;
  let li = document.createElement("li")
  let taskButton = document.createElement("button")
  debugger;
  if (taskPriority == ""){
    taskPriority = "low"
    return taskPriority
  }

  taskButton.innerText = "x";
  li.innerText = `Task: ${taskInput.value}  Priority: ${taskPriority.value}   `
  listIdName.appendChild(li)
  li.appendChild(taskButton)
  taskButton.addEventListener("click",()=>{li.remove()})

  taskInput.value = ""
  taskPriority.value = ""

});
