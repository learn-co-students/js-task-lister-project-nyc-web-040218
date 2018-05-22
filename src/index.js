document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");

  const app = new TaskLister();
});

let listForm = document.getElementById("create-list-form");
let taskForm = document.getElementById("create-task-form");
let appContent = document.getElementById("app-content");
let allLists = []

// CREATE A NEW LIST
listForm.addEventListener("submit", function(e){
  e.preventDefault();

  // GRAB LIST TITLE FIELD
  let listTitle = document.getElementById("new-list-title");

  // VALIDATION
  if (allLists.includes(listTitle.value)){
    alert("List title must be unique!");
    return;
  }

  // CREATE NEW OPTION FOR DROPDOWN AND APPEND
  let newOption = document.createElement("option");
  newOption.text = listTitle.value;
  document.getElementById("parent-list").add(newOption);

  // CREATE AND STRUCTURE LIST DIV
  let listDiv = document.createElement("div");
  let h2 = document.createElement("h2");
  h2.innerHTML = listTitle.value + " ";
  listDiv.appendChild(h2);
  let ul = document.createElement("ul");
  listDiv.appendChild(ul);
  document.getElementById("lists").appendChild(listDiv);
  ul.setAttribute("id", listTitle.value);

  // DELETE ENTIRE LIST FUNCTIONALITY
  let newDelete = document.createElement("button");
  newDelete.setAttribute("class", "delete-list");
  newDelete.innerText = "X";
  h2.appendChild(newDelete);

  // DELETE LIST ITEM FUNCTIONALITY
  newDelete.addEventListener("click", () => { 
    if (document.getElementById("parent-list").childElementCount === 1){
      document.getElementById("app-content").setAttribute("class", "hidden");
    }
    listDiv.remove();
    newOption.remove();
  });

  // SHOW TASK FORM IF HIDDEN
  if (document.getElementById("parent-list").childElementCount > 0){
    document.getElementById("app-content").setAttribute("class", "unhidden");
  }

  allLists.push(listTitle.value);

  // RESET LIST TITLE VALUE IN FORM
  listTitle.value = "";
});


// CREATE A NEW TASK
taskForm.addEventListener("submit", function(e){
  e.preventDefault();

  // GRAB FORM SELECTION, SELECTED LIST UL, TASK INPUT AND TASK DESCRIPTION
  let selection = document.getElementById("parent-list");
  let taskPriority = document.getElementById("new-task-priority");
  let taskDescription = document.getElementById("new-task-description");
  let ul = document.getElementById(selection.value);

  // FORM VALIDATION
  if (taskDescription.value === ""){
    alert("You must fill in a task description.")
    return;
  }
  if (taskPriority.value === ""){
    taskPriority.value = "Low";
  }

  // CREATE AND DEFINE LI
  let li = document.createElement("li");
  // li.innerText = "Task: " + taskDescription.value + "\nPriority: " + taskPriority.value;
  li.innerHTML = "Task: " + taskDescription.value +  "<br>Priority:" + taskPriority.value; 

  // DELETE TASK FUNCTIONALITY
  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "delete-list");
  deleteBtn.innerText = "X";
  deleteBtn.setAttribute("class", "delete-task");
  deleteBtn.addEventListener("click", () => {li.remove(); });

  // APPEND LI AND DELETE TO LIST UL
  li.appendChild(deleteBtn);
  ul.appendChild(li);
  
  // RESET PRIORITY AND DESCRIPTION FIELDS
  taskDescription.value = "";
  taskPriority.value = "";
});