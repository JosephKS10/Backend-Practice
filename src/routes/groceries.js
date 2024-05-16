const { Router } = require("express");

const router = Router();

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

// get method
router.get("/",(req,res)=>{
    res.send(groceries);
})

// specific get method
router.get("/:name", (req,res)=>{
    
    const {name} = req.params;
    const grocery_item = groceries.find( (item) => item.name == name);
    if(grocery_item){
        res.status(200).send(grocery_item)
    }
    else{
        res.status(400).send("Item not found");
    }
})

// post method

router.post("/", (req,res)=>{
    console.log(req.body);
    groceries.push(req.body)
    res.sendStatus(200);
})

module.exports = router
