document.addEventListener('DOMContentLoaded', () => {
  const listForm = document.getElementById("create-list-form");
  const listDiv = document.getElementById("app-content");
  const appTitle = document.getElementById("app_title");

  listForm.addEventListener("submit", function(e){
    e.preventDefault();
    List.prototype.createNewList(document.getElementById("new-list-title").value);
    this.reset();
  });

  document.getElementById("lists").addEventListener("click", function(e){
    e.preventDefault();
    if (e.target.className === "delete-list"){
      e.target.parentNode.parentNode.remove();
      List.prototype.deleteList(e.target.parentNode.parentNode.id);
    }else if (e.target.className === "delete-task"){
      Task.prototype.deleteTask(e.target.parentNode, e.target.parentNode.parentNode.parentNode.id);
    }
  });

  listDiv.addEventListener("submit", function(e){
    e.preventDefault();
    let targetList = document.getElementById("parent-list").value;
    let description = document.getElementById("new-task-description").value;
    let priority = document.getElementById("new-task-priority").value;
    Task.prototype.addTask(targetList, description, priority);
    document.getElementById("create-task-form").reset();
  });

  // const app = new TaskLister();
});




// // FUNCTIONAL CODE

// let listForm = document.getElementById("create-list-form");
// let taskForm = document.getElementById("create-task-form");
// let appContent = document.getElementById("app-content");
// let allLists = []


// // CREATE A NEW LIST
// listForm.addEventListener("submit", function(e){
//   e.preventDefault();

//   // GRAB LIST TITLE FIELD
//   let listTitle = document.getElementById("new-list-title");

//   // VALIDATION
//   if (allLists.includes(listTitle.value)){
//     alert("List title must be unique!");
//     return;
//   }

//   // CREATE NEW OPTION FOR DROPDOWN AND APPEND
//   let newOption = document.createElement("option");
//   newOption.text = listTitle.value;
//   document.getElementById("parent-list").add(newOption);

//   // CREATE AND STRUCTURE LIST DIV
//   let listDiv = document.createElement("div");
//   let h2 = document.createElement("h2");
//   h2.innerHTML = listTitle.value + " ";
//   listDiv.appendChild(h2);
//   let ul = document.createElement("ul");
//   listDiv.appendChild(ul);
//   document.getElementById("lists").appendChild(listDiv);
//   ul.setAttribute("id", listTitle.value);

//   // DELETE ENTIRE LIST FUNCTIONALITY
//   let newDelete = document.createElement("button");
//   newDelete.setAttribute("class", "delete-list");
//   newDelete.innerText = "X";
//   h2.appendChild(newDelete);

//   // DELETE LIST ITEM FUNCTIONALITY
//   newDelete.addEventListener("click", () => { 
//     if (document.getElementById("parent-list").childElementCount === 1){
//       document.getElementById("app-content").setAttribute("class", "hidden");
//     }
//     listDiv.remove();
//     newOption.remove();
//   });

//   // SHOW TASK FORM IF HIDDEN
//   if (document.getElementById("parent-list").childElementCount > 0){
//     document.getElementById("app-content").setAttribute("class", "unhidden");
//   }

//   allLists.push(listTitle.value);

//   // RESET LIST TITLE VALUE IN FORM
//   listTitle.value = "";
// });


// // CREATE A NEW TASK
// taskForm.addEventListener("submit", function(e){
//   e.preventDefault();

//   // GRAB FORM SELECTION, SELECTED LIST UL, TASK INPUT AND TASK DESCRIPTION
//   let selection = document.getElementById("parent-list");
//   let taskPriority = document.getElementById("new-task-priority");
//   let taskDescription = document.getElementById("new-task-description");
//   let ul = document.getElementById(selection.value);

//   // FORM VALIDATION
//   if (taskDescription.value === ""){
//     alert("You must fill in a task description.")
//     return;
//   }
//   if (taskPriority.value === ""){
//     taskPriority.value = "Low";
//   }

//   // CREATE AND DEFINE LI
//   let li = document.createElement("li");
//   // li.innerText = "Task: " + taskDescription.value + "\nPriority: " + taskPriority.value;
//   li.innerHTML = "Task: " + taskDescription.value +  "<br>Priority:" + taskPriority.value; 

//   // DELETE TASK FUNCTIONALITY
//   let deleteBtn = document.createElement("button");
//   deleteBtn.setAttribute("class", "delete-list");
//   deleteBtn.innerText = "X";
//   deleteBtn.setAttribute("class", "delete-task");
//   deleteBtn.addEventListener("click", () => {li.remove(); });

//   // APPEND LI AND DELETE TO LIST UL
//   li.appendChild(deleteBtn);
//   ul.appendChild(li);
  
//   // RESET PRIORITY AND DESCRIPTION FIELDS
//   taskDescription.value = "";
//   taskPriority.value = "";
// });








// // SHUN’S CODE
// const form = document.getElementById('create-list-form');
// form.addEventListener('submit', function(e) {
//   e.preventDefault();

//   const app = document.getElementById('app-content')
//   if (!app.innerHTML) {
//     app.innerHTML = taskForm;
//   }

//   const input = document.getElementById('new-list-title');

//   // add task form and drop down
//   const select = document.getElementById('parent-list');
//   const option = document.createElement('option');
//   option.text = input.value;
//   select.add(option);
//   select.value = option.text;

//   // add list name
//   if (!document.getElementById('lists')) {
//     const lists = document.createElement('div');
//     lists.setAttribute("id", "lists");
//     document.body.appendChild(lists);
//   }

//   const list = createListName(input.value);
//   lists.innerHTML += list;

//   // add list (working on it now)
//   const task = getElementById('new-task-description');
//   const priority = getElementById('new-task-priority');
//   const ul = getElementsByTagName('ul');


//   input.value = "";
// });

// // delete
// document.addEventListener('click', function(e) {
//   if (e.target.className === "delete-list") {
//     e.target.parentNode.parentNode.remove();
//   }
// });