document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");

  const app = new TaskLister();
});

let listForm = document.getElementById("create-list-form");
let taskForm = document.getElementById("create-task-form");
let appContent = document.getElementById("app-content");
let listArray = {}
let listId = 0
// listTitle.push(this:{}) //listArray = ["New List":{food:max}]
class ListObjects {

}

listForm.addEventListener("submit", function(e){
  e.preventDefault();
  let listTitle = document.getElementById("new-list-title");
  let newOption = document.createElement("option");
  newOption.text = listTitle.value;
  document.getElementById("parent-list").add(newOption);
  let listDiv = document.createElement("div");
  let h2 = document.createElement("h2");
  h2.innerHTML = listTitle.value;
  let ul = document.createElement("ul")
  listDiv.appendChild(ul)
  listDiv.appendChild(h2);
  document.getElementById("lists").appendChild(listDiv);
  ul.setAttribute("id", listTitle.value)
  let newDelete = document.createElement("button");
  newDelete.setAttribute("class", "delete-list");
  newDelete.innerText = "X";
  h2.appendChild(newDelete);
  listArray[`${++listId}`]= listTitle.value
  newDelete.addEventListener("click", () => { 
    listDiv.remove(); 
    newOption.remove(); 

  });
  listTitle.value = "";
});

taskForm.addEventListener("submit", function(e){
  e.preventDefault();
  
  let selection = document.getElementById("parent-list") //need to add .value
  let taskPriority = document.getElementById("new-task-priority");
  let taskDescription = document.getElementById("new-task-description");
  let ul = document.getElementById(selection.value)
  let li = document.createElement("li")
  li.innerText = taskDescription.value
  ul.appendChild(li)

});