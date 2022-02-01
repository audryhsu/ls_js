const { Client } = require('pg');

let client = new Client({
  // host: "/var/run/postgresql",
  // port: 5432,
  // user: "ahsu",
  database: "films"});

async function logQuery(queryText) {
  await client.connect();

  let data = await client.query(queryText);
  console.log(data.rows[2].count);

  client.end(); // close db connection
}

let query = `SELECT count(id) FROM films
  WHERE duration < 110
  GROUP BY genre`;

logQuery(query);
