#!/usr/bin/env node
/*
A command line application to track expenses. Conventionally, should not have file ending.
*/
const { Client } = require('pg');
const { argv } = require('process'); // import to use process.argv
const client = new Client({ database: "expense_project"});
const HELP = `An expense recording system

Commands:

add AMOUNT MEMO [DATE] - record a new expense
clear - delete all expenses
list - list all expenses
delete NUMBER - remove expense with id NUMBER
search QUERY - list expenses with a matching memo field`;
const args = process.argv;

function main() {
  let command = args[2];

  if (command === 'list' ) {
    listExpenses();
  } else if (command === 'add') {
    let [amount, memo] = [args[3], args[4]];
    if (amount, memo) {
      addExpense(amount, memo);
    } else {
      console.log(`You must provide an amount and memo`);
    }
  } else {
    displayHelpInfo();
  }
}

main();

async function addExpense(amount, memo) {
  await client.connect()
    .catch(error => logAndExit(error));

  let query = `INSERT INTO expenses(amount, memo, created_on) VALUES ($1, $2, $3)`;
  let date = new Date().toLocaleDateString();
  let insertValues = [amount, memo, date];

  await client.query(query, insertValues)
    .then(res => console.log('Success adding expense.'))
    .catch(error => logAndExit(error));

  client.end().catch(error => logAndExit(error));
}

async function listExpenses() {
  await client.connect().catch(error => logAndExit(error));

  let query = `SELECT * from expenses ORDER BY created_on ASC`;
  let data = await client.query(query)
    .catch(error => logAndExit(error));

  data.rows.forEach(row => {
    let date = row.created_on.toDateString();
    console.log(`${row.id} | ${date} | ${row.amount.padStart(6)} | ${row.memo.padStart(15)}`);
  });
  client.end().catch(error => logAndExit(error));
}

function logAndExit(error) {
  console.error(error.stack);
  process.exit(1);
}

function displayHelpInfo() {
  console.log(HELP);
}
