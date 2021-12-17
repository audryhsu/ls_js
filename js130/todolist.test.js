const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  // your tests go here
  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('todolist toArray returns an array', () => {
    expect(Array.isArray(list.toArray())).toBe(true);
  });

  test('todolist first item is Buy milk', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('todolist last item is go to gym', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('todolist shift method removes and returns first item', () => {
    let item = list.shift();
    expect(item).toBe(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('todolist pop removes last item and mutates list', () => {
    let item = list.pop();
    expect(item).toBe(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('todolist is done returns true when all items in list are done', () => {
    todo1.markDone();
    todo2.markDone();
    todo3.markDone();
    expect(list.isDone()).toBe(true);
    todo3.markUndone();
    expect(list.isDone()).toBe(false);
  });

  test('todolist add method can add a todo object otherwise throw TypeError', () => {
    let todo4 = new Todo('another todo');
    list.add(todo4);
    expect(list.todos).toEqual([todo1, todo2, todo3, todo4]);
    expect((() => list.add('bad todo'))).toThrow(TypeError);
  });

  test('todolist itemAt method returns an item at a specific index or raises a ReferenceError', () => {
    expect(list.itemAt(0)).toBe(todo1);
    expect(() => list.itemAt(4)).toThrow(ReferenceError);
  });

  test('todolist markdoneAt updates a todo status otherwise raise ReferenceError if out of index range', () => {
    list.markDoneAt(0);
    expect(list.itemAt(0).isDone()).toBe(true);
    expect(() => list.markDoneAt(100)).toThrow(ReferenceError);
  });

  test('todolist markUndoneAt updates a todo status to false otherwise raise ReferenceError if out of index range', () => {
    list.markUndoneAt(0);
    expect(list.itemAt(0).isDone()).toBe(false);
    expect(() => list.markUndoneAt(100)).toThrow(ReferenceError);
  });

  test('todolist markAllDone has all todos done property marked as true', () => {
    list.markAllDone();
    let doneStatus = list.toArray().map(todo => todo.done);
    expect(doneStatus).toEqual([true, true, true]);
  });
  test('todolist removeAt removes a todo at a specific index location', () => {
    expect(list.removeAt(1)).toEqual([todo2]);
    expect(list.toArray().length).toBe(2);
    expect(list.toArray()).toEqual([todo1, todo3]);
  });

  xtest('toString returns a string representation of the list', () => {
    let string = `---- ${list.title} ----
  \n[ ] Buy milk
  \n[ ] Clean room
  \n[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('forEach iterates over elements in list', () => {
    let todos = [];
    list.forEach((todo, i) => {
      todos.push(todo);
    });
    expect(todos).toEqual([todo1, todo2, todo3]);

  });

  test('filter returns a new todolist object', () => {
    todo1.markDone();
    let newList = new TodoList(list.title);
    newList.add(todo1);
    expect(newList.title).toBe(list.title);
    let filtered = list.filter(todo => todo.isDone());
    expect(filtered.toString()).toBe(newList.toString());
  });


});
