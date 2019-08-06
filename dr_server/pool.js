const mysql=require('mysql');
var pool=mysql.createPool({
	host:'127.0.0.1',
	post:'3306',
	user:'root',
	password:'',
	database:'dr',
	connectionLimit:20
});
module.exports=pool;
