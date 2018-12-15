// npm install mysql
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'YOUR_URL',
    user: 'USERNAME',
    password: 'PASSWORD',
    database: 'security_database',
    multipleStatements: true  // Security concern
});

// ' OR '1'='1
// '; UPDATE users SET role = 'admin' WHERE username = 'HALAHALA';-- 
// '; desc users;-- 
function getAllUsers(callback, res, search) {

    con.query(`SELECT username FROM users WHERE username LIKE '%${search}%'` , function (err, result) {
        console.log(result)
        callback(result, res, err)
    });
}

function createUser(user) {
    const { username, passwd } = user;
    con.query(`INSERT INTO users (username, passwd, role) VALUES ("${username}","${passwd}","user")`)
    return user;
}

function loginUser(username, password, res) {
    console.log("Login")
    return con.query(`SELECT * FROM users WHERE username ='${username}' AND passwd = '${password}'`, function (err, result, fields) {
        console.log(result)
        if (result.length === 0) {
            res.render('login', { error: 'Username or password is wrong' });
        }
        res.render('loggedin', { title: 'loggedin', user: result[0] });
    })
}

module.exports = {
    getAllUsers,
    loginUser,
    createUser,
}