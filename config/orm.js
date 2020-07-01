// needs to include
// selectAll()
// insertOne()
// updateOne()

'use strict';

const connection = require(`../config/connection.js`);

function printQuestionMarks(num) {
    const arr = [];

    for (let i = 0; i < num; ++i) {
        arr.push(`?`);
    }

    return arr.toString();
}

function objToSql(ob) {
    const arr = [];


    for (const key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === `string` && value.indexOf(` `) >= 0) {
                value = `'${value}'`;
            }
            arr.push(`${key}=${value}`);
        }
    }
    return arr.toString();
}

const orm = {
    // selectAll()
    selectAll(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // insertOne()
    insertOne(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table}`;

        queryString += ` (`;
        queryString += cols.toString();
        queryString += `) `;
        queryString += `VALUES (`;
        queryString += printQuestionMarks(vals.length);
        queryString += `) `;

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // updateOne()
    updateOne(table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table}`;

        queryString += ` SET `;
        queryString += objToSql(objColVals);
        queryString += ` WHERE `;
        queryString += condition;

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // deleting a burger
    deleteOne(table, condition, cb) {
        let queryString = `DELETE FROM ${table}`;
        queryString += ` WHERE `;
        queryString += condition;

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;