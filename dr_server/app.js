const express=require('express');
const session=require('express-session');
const bodyParser=require('body-parser');
const cors=require("cors");
var app=express();
app.use(cors({
	origin:["http://127.0.0.1:8080","http://localhost:8080"],
	credentials:true
}))
app.listen(3000);
app.use(session({
    secret:"安全128位字符串",//安全字符串
    resave:true,//请求时更新数据
    saveUninitialized:true,//保存初始数据
}));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended:false  
}));
