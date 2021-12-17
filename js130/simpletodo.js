function makeList() {
  let todos = [];

  return {
    add(task) {
      todos.push(task);
      console.log(`${task} added!`);
    },
    list() {
      if (todos.length < 1) console.log("List is empty.");
      todos.forEach(item => {
        console.log(item);
      });
    },
    remove(task) {
      if (this.isExistingTask(task)) {
        this.removeTask(task);
        console.log(`${task} removed!`);
      }
    },
    isExistingTask(string) {
      return todos.filter(task => task === string).length > 0;
    },

    removeTask(string) {
      let idx = todos.findIndex(task => task === string);
      todos.splice(idx, 1);
    },
  };
}

let list = makeList();
list.list();
// The list is empty.
list.add('corn');
list.add('peas');
list.list();
list.remove('peas');
list.list();

console.log(list.todos);
