/*
input: text data to parse
output: number of email messages found in string, and date range of email messages
rule:
- email messages are separated by ##||##
- parts of one message are separated by #/#
  - 5 parts: sender, subject, date, receipient, body
algo:
number of messages = break data into array based on message delimeter

break each email into it's five parts using part delimeter
- store the data in an emails object that uses each part as a property
- clean up date
date range: get array of all dates mm--dd-yyy format
#/#\nDate: mm-dd-yyy match pattern
  - match pattern again for just the date
  - create date object
  - add to array of dates

- find min and max date in dates array
*/

const emailData  = require('./emaildata');

function mailCount(emailData) {
  let emailArray = emailData.split("##||##");
  let emailObjs = convertToEmailObjects(emailArray);
  let allDates = extractDates(emailObjs).sort(dateCompare);

  let minDate = allDates[0].toString().substring(0, 16);
  let maxDate = allDates[allDates.length - 1].toString().substring(0, 16);

  console.log(`Count of Email: ${emailArray.length}`);
  console.log(`Date Range: ${minDate} - ${maxDate}`);
}

function dateCompare(date1, date2) {
  if (date1 < date2) {
    return -1;
  } else if (date1 > date2) {
    return 1;
  } else {

    return 0;
  }
}

function extractDates(emailObjs) {
  return emailObjs.map(email => {
    let date = email['date'].match(/\d\d-\d\d-\d\d\d\d/g)[0];
    return new Date(date);
  });
}
function convertToEmailObjects(emails) {
  //takes array of emails and parses each into an object with properties
  return emails.map(email => {
    email = email.replace(/\n/g, '');
    let parts = email.split("#/#");

    return {
      sender: parts[0],
      subject: parts[1],
      date: parts[2],
      receipient: parts[3],
      body: parts[4]
    };
  });
}


mailCount(emailData);

// console output
// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
