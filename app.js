const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})      

app.get('/gettask',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

// app.post('/addtask',(req,res)=>{
//     todos.push(req.body.newtask);
//     res.redirect('/gettask');
// })

app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
})