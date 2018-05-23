let lists = {};

class List {
  constructor(title){
    this.title = title;
    this.tasks = {};
    lists[title] = this;
  }

  createNewList(title){
    if (this.validate(title)){
      alert("Title must be unique!");
    }else{
      let newList = new List(title);
      newList.createList(title);
    }
  }

  createList(title){
    document.getElementById("lists").innerHTML += this.createListStructure();
    Task.prototype.createForm();
  }

  validate(title){
    let newArr = [];
    for (const obj in lists){
      newArr.push(obj);
    }
    return newArr.includes(title);
  }

  deleteList(title){
    delete lists[title];
    Task.prototype.createForm();
  }

  createListStructure(){
    return `<div id="${this.title}">
      <h2>${this.title}
        <button data-title="${this.title}" class="delete-list">
          X
        </button>
      </h2>
      <ul>
      </ul>
    </div>`};

}
