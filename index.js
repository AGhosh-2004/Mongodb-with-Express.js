const express = require("express");
const app = express();
app.set("view engine","ejs");
const path = require("path");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
const mongoose = require("mongoose");
let port = 3000;
const Chat = require("./models/chat.js");
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whattsapp");
}

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err);
})


app.listen(port,()=>{
    console.log("app is listening");
})

app.get("/",(req,res)=>{
    console.log("get request to home route");
})



//index route
app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    res.render("index.ejs",{chats});
})

app.get("/chats/new",async (req,res)=>{
    res.render("form.ejs");
})

app.post("/chats",async (req,res)=>{
    let {from, msg, to}=req.body;
    let chat =new Chat({from,to,msg,created_at:new Date()});
    await chat.save()
    console.log("chat saved");
    res.redirect("/chats");
})
