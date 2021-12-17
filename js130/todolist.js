const Todo = require('./todo.js');
class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError("can only add Todo objects");
    }
    this.todos.push(todo);
  }
  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }
  last() {
    return this.todos[this.size() - 1];
  }
  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }
  _validateIndex(index) {
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }
  markDoneAt(index) {
    this.itemAt(index).done = true;
  }
  markUndoneAt(index) {
    this.itemAt(index).done = false;
  }
  isDone() {
    return this.todos.every(todo => todo.isDone());
  }
  shift() {
    return this.todos.shift();
  }
  pop() {
    return this.todos.pop();
  }
  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1);
  }
  toString() {
    let title = `---- ${this.title} ----`;
    let list = this.todos.map(todo => todo.toString()).join("\n");
    return `${title}\n${list}`;
  }
  forEach(callbackfn) {
    this.todos.forEach(callbackfn); // why does this work?
  }
  filter(callbackfn) {
    let newList = new TodoList(this.title);
    this.forEach(todo => {
      if (callbackfn(todo)) newList.add(todo);
    });
    return newList;
  }

  findByTitle(title) {
    return this.filter(todo => todo.title === title).first();
  }

  allDone() {
    let newList = this.filter(todos => todos.isDone());
    return newList;
  }
  allNotDone() {
    let newList = this.filter(todos => !todos.isDone());
    return newList;
  }
  markDone(title) {
    this.findByTitle(title).markDone();
  }
  markAllDone() {
    this.allNotDone().forEach(todo => todo.markDone());
  }
  markAllUndone() {
    this.allDone().forEach(todo => todo.markUndone());
  }
  toArray() {
    return this.todos.slice();
  }
}
module.exports = TodoList;
