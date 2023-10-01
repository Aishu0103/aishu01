const express=require("express")
const mongoose=require("mongoose")
const body=require("body-parser")
const app=express()
app.set('view engine', 'ejs');
app.use(body.urlencoded({extended:true}))
app.use(express.static("public"))

mongoose.connect("mongodb://127.0.0.1:27017/socialmedia",{useNewUrlParser:true})

//schema
const todoschema=new mongoose.Schema({
    name: String,
    userId: String,
    feed: [{
        profile_photo: String,
        profile_name: String,
        post: String,
        location: String,
        liked_by: String,
        total_comment: Number,
        total_likes: Number,
        liked_profile: [],
        hashtag: String,
    }],
    message:[{
        photo:String,
        name:String,
        text:String,
        active:String,
        bold:String
    }]
})
//model
const todomodel=mongoose.model("users",todoschema)

app.get("/",function(req,res){
    console.log(todomodel)
    todomodel.find().then((result) => {
        console.log(result[0].feed.length)
        res.render('index',{user:result[0]})
    }).catch((err) => {
        console.log(err)
    });


   
})

// app.post("/",function(req,res){
//     var todotask=req.body.task
//     //console.log(task)
//     //lists.push(task)
//     const task=new todomodel({task:todotask})

//     task.save()

//     res.redirect("/")
// })



// app.post("/delete",function(req,res){
//     var item=req.body.checkbox
//     todomodel.deleteOne({_id:item}).then((result) => {
//         res.redirect("/")
//     }).catch((err) => {
//         console.log(err)
//     });

// })


app.listen(process.env.PORT ||3000,function(){
    console.log("Server is up and running")
})