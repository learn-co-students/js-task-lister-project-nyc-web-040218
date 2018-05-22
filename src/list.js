// class List {
//   // your code here
// }
// document.addEventListener('DOMContentLoaded', () => {
//   // your solution here
//   // grab DOM elements
//   // const listDiv = document.getElementById("app-content");
//
//   const app = new TaskLister();
// });
//
// let listForm = document.getElementById("create-list-form");
// let taskForm = document.getElementById("create-task-form");
// let appContent = document.getElementById("app-content");
// let listArray = {}
// let listId = 0
// // listTitle.push(this:{}) //listArray = ["New List":{food:max}]
// class ListObjects {
//
// }
//
// listForm.addEventListener("submit", function(e){
//   e.preventDefault();
//   let listTitle = document.getElementById("new-list-title");
//   let newOption = document.createElement("option");
//   // let listDiv = document.createElement("div");
//   let ul = document.createElement("ul")
//   let h2 = document.createElement("h2");
//   let newDelete = document.createElement("button");
//   let lists = document.getElementById("lists")
//
//   document.getElementById("parent-list").add(newOption);
//   newDelete.setAttribute("class", "delete-list");
//   newDelete.innerText = "X";
//
//   h2.innerHTML = listTitle.value;
//   newOption.text = listTitle.value;
//
//   ul.setAttribute("id", listTitle.value)
//   h2.appendChild(newDelete);
//   listDiv.appendChild(h2);
//   listDiv.appendChild(ul)
//   lists.appendChild(listDiv);
//
//   listArray[`${++listId}`]= listTitle.value
//   newDelete.addEventListener("click", () => {
//     listDiv.remove();
//     newOption.remove();
//
//   });
//   listTitle.value = "";
// });
//
// taskForm.addEventListener("submit", function(e){
//   e.preventDefault();
//
//   let selection = document.getElementById("parent-list") //need to add .value
//   let taskPriority = document.getElementById("new-task-priority");
//   let taskDescription = document.getElementById("new-task-description");
//   let ul = document.getElementById(selection.value)
//   let li = document.createElement("li")
//   li.innerText = taskDescription.value
//   ul.appendChild(li)
//
// });
