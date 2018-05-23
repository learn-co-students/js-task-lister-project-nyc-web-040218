class Task {
  constructor(list, description, priority){
    this.list = list;
    this.description = description;
    this.priority = priority || "Low";
  }

  createForm(){
    if (Object.keys(lists).length === 0){
      document.getElementById("app-content").innerHTML = "";
    }else{
      document.getElementById("app-content").innerHTML = this.formStructure();
      this.populateFormSelect();
    }
  }

  populateFormSelect(){
    for (const obj in lists){
      let newOption = document.createElement("option");
      newOption.text = obj;
      newOption.value = obj;
      document.getElementById("parent-list").add(newOption);
    }
  }

  addTask(list, description, priority){
    if(this.validate(list, description)){
      alert("Task must be unique!");
    }else{
      let task = new Task(list, description, priority);
      lists[list]["tasks"][task.description] = task;
      this.renderTask(task);
    }
  }

  validate(list, description){
    let newArr = [];
    for (const obj in lists[list]["tasks"]){
      newArr.push(obj);
    }
    return newArr.includes(description);
  }

  renderTask(task){
    let li = this.createList(task.list, task.description, task.priority);
    document.getElementById(task.list).children[1].innerHTML += li;
  }

  deleteTask(li, list){
    delete lists[list]["tasks"][li.id]
    li.remove();
  }

  formStructure(){
    return `<form id="create-task-form">
      <label for="parent-list">Select List:</label>
      <select id="parent-list">
      </select>

      <label for="new-task-description">Task description:</label>
      <input required type="text" id="new-task-description" placeholder="description">

      <label for="new-task-priority">Priority level:</label>
      <input type="text" id="new-task-priority" placeholder="priority">
      <input type="submit" value="Create New Task">
    </form>`;
  }

    createList(list, description, priority) {
      return `<li id="${description}">
        Task: ${description}
        <button data-list-list="${list}" data-task-list="${list}" class="delete-task">
            X
        </button>
        <br>
        Priority: ${priority}
      </li>`;
  }
}