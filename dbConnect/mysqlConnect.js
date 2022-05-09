var mysql = require('mysql')
var conf = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "7344",
    database: "world"
});
conf.connect(function(err) {
    if (err) throw err;
    else {
        conf.query("select * from city", (error, result)=> {
            if (error) throw error; 
            console.warn("Results => ", result);
            console.warn("Results => ", result[0].Name);
        })
    };
})