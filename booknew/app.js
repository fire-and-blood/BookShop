var express=require('express');
var app=express();
app.use(express.static('resources'));
app.get('',function(req,res){
    res.sendFile(__dirname+"/pages/index.html")
})
app.get('/index',function(req,res){
    res.sendFile(__dirname+"/pages/index.html")
})

app.get('/admin/login',function(req,res){
    res.sendFile(__dirname+"/pages/admin/login.html");
})


app.get('/book/addbook',function(req,res){
    res.sendFile(__dirname+"/pages/book/addbook.html");
})
app.get('/book/booklist',function(req,res){
    res.sendFile(__dirname+"/pages/book/booklist.html");
})
app.get('/book/editbook',function(req,res){
    res.sendFile(__dirname+"/pages/book/editbook.html");
})
app.get('/book/list',function(req,res){
    res.sendFile(__dirname+"/pages/book/list.html");
})
app.get('/book/product',function(req,res){
    res.sendFile(__dirname+"/pages/book/product.html");
})

app.get('/user/cart',function(req,res){
    res.sendFile(__dirname+"/pages/user/cart.html");
})
app.get('/user/register',function(req,res){
    res.sendFile(__dirname+"/pages/user/register.html");
})
app.get('/user/login',function(req,res){
    res.sendFile(__dirname+"/pages/user/login.html");
})
app.get('/user/list',function(req,res){
    res.sendFile(__dirname+"/pages/user/list.html");
})

app.get('/user/add',function(req,res){
    res.sendFile(__dirname+"/pages/user/add.html");
})
app.get('/user/edit',function(req,res){
    res.sendFile(__dirname+"/pages/user/edit.html");
})





var server=app.listen(8080,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("系统启动，访问地址为http://%s:%s",host,port)
});