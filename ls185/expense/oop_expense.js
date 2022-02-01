#!/usr/bin/env node
const { Client } = require('pg');
const { argv } = require('process'); // import to use process.argv
const readline = require('readline');

class CLI {
  static displayHelpInfo() {
    console.log(`An expense recording system

    Commands:

    add AMOUNT MEMO [DATE] - record a new expense
    clear - delete all expenses
    list - list all expenses
    delete NUMBER - remove expense with id NUMBER
    search QUERY - list expenses with a matching memo field`);
  }
  constructor() {
    this.application = new ExpenseData();
  }
  processCommand(args) {
    let command = args[2];

    if (command === 'list') {
      this.application.listExpenses();

    } else if (command === 'add') {
      let [amount, memo] = [args[3], args[4]];
      if (amount, memo) {
        this.application.addExpense(amount, memo);
      } else {
        console.log(`You must provide an amount and memo`);
      }
    } else if (command === 'search') {
      this.application.searchExpense(args[3]);
    } else if (command === 'delete') {
      this.application.deleteExpense(args[3]);
    } else if (command === 'clear') {
      let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      rl.question("This will remove all expenses. Are you sure? (enter y to confirm) ", (answer) => {
        if (answer.toLowerCase() === 'y') {
          this.application.deleteAllExpenses();
        }
        rl.close();
      });
    } else {
      CLI.displayHelpInfo();
    }
  }
}

class ExpenseData {
  constructor() {
    this.client = new Client({ database: "expense_project"});
    this.data = null;
  }

  async deleteAllExpenses() {
    await this.client.connect().catch(error => this.logAndExit(error));

    await this.setupSchema().catch(error => this.logAndExit(error));
    let data = await this.client.query(`DELETE FROM expenses`).catch(error => this.logAndExit(error));
    console.log('All expenses deleted.');

    this.client.end().catch(error => this.logAndExit(error));
  }

  async deleteExpense(id) {
    await this.client.connect().catch(error => this.logAndExit(error));

    await this.setupSchema().catch(error => this.logAndExit(error));
    let query = `SELECT * from expenses WHERE id = $1`;
    let data = await this.client.query(query, [id]).catch(error => this.logAndExit(error));

    if (data.rowCount === 0) {
      console.log(`There is no expense with the id ${id}`);
    } else {
      await this.client.query(`DELETE FROM expenses WHERE id = $1`, [`${id}`]).catch(error => this.logAndExit(error));

      console.log(`The following expense has been deleted:`);
      this.displayExpenses(data);
    }
    this.client.end().catch(error => this.logAndExit(error));
  }

  async searchExpense(term) {
    await this.client.connect().catch(error => this.logAndExit(error));

    await this.setupSchema().catch(error => this.logAndExit(error));
    let query = `SELECT * from expenses WHERE memo ILIKE $1 ORDER BY created_on ASC`;
    let data = await this.client.query(query, [`%${term}%`]).catch(error => this.logAndExit(error));

    this.displayExpenses(data);
    this.client.end().catch(error => this.logAndExit(error));
  }

  displayExpenses(data) {
    this.displayCount(data.rowCount);

    data.rows.forEach(row => {
      let date = row.created_on.toDateString();
      console.log(`${row.id.toString().padStart(4)} | ${date} | ${row.amount.padStart(6)} | ${row.memo.padStart(25)}`);
    });

    this.displayTotal(data);
  }

  displayTotal(data) {
    let total =
      data.rows.map((row, i) => {
        return parseFloat(row.amount);
      })
        .reduce((acc, currentValue) => acc + currentValue , 0)
        .toString();

    console.log(`-----------------------------------------------------------`);
    console.log(`Total`.padEnd(19), `${total.padStart(11)}`);
  }

  displayCount(rowCount) {
    if (rowCount === 0) {
      console.log('There are no expenses.');
    } else {
      let verb = rowCount > 1 ? 'are' : 'is';
      let noun = rowCount > 1 ? 'expenses' : 'expense';
      console.log(`There ${verb} ${rowCount} ${noun}`);
    }
  }

  async addExpense(amount, memo) {
    await this.client.connect().catch(error => this.logAndExit(error));

    this.setupSchema();
    let query = `INSERT INTO expenses(amount, memo, created_on) VALUES ($1, $2, $3)`;
    let date = new Date().toLocaleDateString();
    let insertValues = [amount, memo, date];

    await this.client.query(query, insertValues).catch(error => this.logAndExit(error));
    console.log('Success adding expense.');

    this.client.end().catch(error => this.logAndExit(error));
  }

  async listExpenses() {
    await this.client.connect().catch(error => this.logAndExit(error));

    this.setupSchema().catch(error => this.logAndExit(error));
    let query = `SELECT * from expenses ORDER BY created_on ASC`;
    let data = await this.client.query(query).catch(error => this.logAndExit(error));

    this.displayExpenses(data);
    this.client.end().catch(error => this.logAndExit(error));
  }

  logAndExit(error) {
    console.error(error.stack);
    process.exit(1);
  }

  async setupSchema() {
    let checkQuery = `SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'expenses'`;

    let createQuery = `CREATE TABLE IF NOT EXISTS expenses (
      id SERIAL PRIMARY KEY,
      amount numeric(6,2) not null CHECK (amount >= 0.01),
      memo text not null,
      created_on date not null
    )`;

    // LS solution code
    let res = await this.client.query(checkQuery).catch(err => this.logAndExit(err));
    if (res.rows[0].count === '0') {
      await this.client.query(createQuery).catch(err => this.logAndExit(err));
      console.log('Database created!');
    }
    // my solution using then -- EDIT: dont need then with async/await
    // await this.client.query(checkQuery)
    //   .then(res => {
    //     if (res.rows[0].count === '0') {
    //       this.client.query(createQuery)
    //       .then(r => console.log('Database created!'))
    //       .catch(err => this.logAndExit(err));
    //     }
    //   })
    //   .catch(err => this.logAndExit(err));

  }
}

const cli = new CLI();
cli.processCommand(process.argv);
