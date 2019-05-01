const connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];// loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];// check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {// if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }// e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }// translate array of strings to a single comma-separated string
    return arr.toString();
}

const orm = {
    all:(tableName,cb)=>{// selectAll
        let queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, (err, result)=> {
            if (err) throw err;
            
            cb(result);
        });
    },
    create:(tableName, cols, vals, cb )=>{ //insertOne
        var queryString = "INSERT INTO " + tableName;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";  
        //console.log(queryString);
        connection.query(queryString, vals, (err, result)=> {
            if (err) throw err;
            cb(result);
        });       
    },
    update: (tableName, objColVals, condition, cb)=> {
        var queryString = "UPDATE " + tableName;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        //console.log(queryString);
        connection.query(queryString,(err, result)=> {
          if (err) throw err;
          cb(result);
        });
      }
}

module.exports = orm;