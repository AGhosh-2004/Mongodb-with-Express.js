const mongoose = require("mongoose");
const Chat = require("./models/chat");
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

let allChats =[
{
    from:"neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
},
{
    from:"rohit",
    to: "mohit",
    msg: "i have sent you",
    created_at: new Date(),
},
{
    from:"bisu",
    to: "anup",
    msg: "how are you",
    created_at: new Date(),
},
{
    from:"anup",
    to: "gourab",
    msg: "i am fine",
    created_at: new Date(),
}
];

Chat.insertMany(allChats);