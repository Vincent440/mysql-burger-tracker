const connection = require('./connection.js');

function printQuestionMarks(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objectToSQL(object) {
  let arr = [];// loop through the keys and push the key/value as a string int arr
  for (let key in object) {
    let value = object[key];// check to skip hidden properties
    if (Object.hasOwnProperty.call(object, key)) {// if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }// e.g. {name: 'Lana Del Grey'} => ['name='Lana Del Grey'']
      // e.g. {sleepy: true} => ['sleepy=true']
      arr.push(key + '=' + value);
    }
  }// translate array of strings to a single comma-separated string
  return arr.toString();
}

const orm = {
  all:(tableName, callBack) => {
    const queryString = `SELECT * FROM ${tableName};`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      callBack(result);
    });
  },
  create:(tableName, cols, vals, callBack )=>{ //insertOne
    const queryString = `INSERT INTO ${tableName} ( ${cols.toString()})VALUES (${printQuestionMarks(vals.length)});`;
    connection.query(queryString, vals, (err, result)=> {
      if (err) throw err;
      callBack(result);
    });       
  },
  update: (tableName, objColVals, condition, callBack)=> {
    const queryString = `UPDATE ${tableName} SET ${objectToSQL(objColVals)} WHERE ${condition};`;
    connection.query(queryString,(err, result)=> {
      if (err) throw err;
      callBack(result);
    });
  }
}

module.exports = orm;