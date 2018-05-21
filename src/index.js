document.addEventListener('DOMContentLoaded', () => {
  const listDiv = document.getElementById("app-content");
  const createTaskForm = document.getElementById('create-list-form')
  const input = document.getElementById('new-list-title');
  const div = document.getElementById('app-content');

  createTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (div.hasChildNodes()){
      addOption()
    }
    else{
      div.innerHTML =
      `
      <form id="create-list-form">
      <label>Select List</label>
      <select id='parent-list'></select>
      <label for="new-task-description">Task Description: </label>
      <input id="new-task-description" type="text" placeholder="description"></input>
      <label for="new-task-priority">Priority level:</label>
      <input id="new-task-description" type="text" placeholder="priority"></input>
      <input type="submit" value="Create New Task"></input>
      `
      addOption()
  }

  //div with lists
  //    - div
 //        -- h2 && ul
  const lists = document.createElement("div");
  lists.setAttribute("id", "lists");
  const taskDiv = document.createElement('div');
  const html = `<h2>${input.value}</h2> <ul></ul>`;
  taskDiv.innerHTML = html;
  lists.appendChild(taskDiv);
  listDiv.appendChild(lists);

  // listDiv.append(lists)
  // const taskDiv = document.createElement('div')
  // taskDiv.id = "lists"
  // taskDiv.innerHTML =
  // ` <h2>${input.value}</h2>
  //   <ul></ul>
  // `
  // lists.append(taskDiv);
  });

  function addOption(){
    const option = document.createElement("option");
    const selectItems = document.getElementById("parent-list");
    option.value =  input.value;
    option.innerText = input.value;
    selectItems.add(option);
  }
});
