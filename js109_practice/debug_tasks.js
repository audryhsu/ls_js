let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
   }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  if (todos.length > 0 && n < todos.length) {
    let completedTasks = todos.splice(0, n);
    console.log(`${completedTasks} complete!`); //loop deletes teh same empty array node
    // delete todos[0]; // creates an empty slot in array.
    tasksComplete++;
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  } else {
    console.log('All tasks complete!');
  }
}

function displayTaskList() {

  console.log(`ToDo list (${todos.length} tasks):`);
  console.log('---------------------');

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();
