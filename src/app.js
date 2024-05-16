const express = require("express");

const app = express();

app.listen(3000, ()=>{
   console.log("Server is running of port 3000")
})

const groceries = [
   {
       id: 1,
       name: "Bread",
       quantity: 3
   },
   {
       id: 2,
       name: "Milk",
       quantity: 2
   },
   {
       id: 3,
       name: "Egg",
       quantity: 10
   },
   {
       id: 4,
       name: "Butter",
       quantity: 1
   }
]

app.get("/", (req,res)=>{
   res.sendStatus(200)
})
app.get("/groceries",(req,res)=>{
   res.send(groceries);
})

app.get("/groceries/:name", (req,res)=>{
   
   const {name} = req.params;
   const grocery_item = groceries.find( (item) => item.name == name);
   if(grocery_item){
       res.status(200).send(grocery_item)
   }
   else{
       res.status(400).send("Item not found");
   }
})
app.get("/posts",(req,res)=>{
   res.status(200).send(post);
})


