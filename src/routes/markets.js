const { Router } = require("express");

const router = Router();

const markets = [
    {
        id: 1,
        name: "Mark's Supermarket",
        address: "ABC colony",
        miles: 5
    },
    {
        id: 2,
        name: "Jack's Supermarket",
        address: "DCS colony",
        miles: 2
    },
   
]

// get method
router.get("/",(req,res)=>{
   
    const {miles} = req.query // for query parameter more queries with & symbol
    const parsedMiles = parseInt(miles)
    console.log(req.query)
    console.log(parsedMiles)
    if(miles){
        const filteredSuperMarkets = markets.filter((s)=> s.miles <=parsedMiles)
        res.status(200).send(filteredSuperMarkets)
        console.log("hello")
    }
    else{
        res.send(markets);
        console.log("good")
    }

})




// specific get method
router.get("/:name", (req,res)=>{
    
    const {name} = req.params;
    const market_item = markets.find( (item) => item.name == name);
    if(market_item){
        res.status(200).send(market_item)
    }
    else{
        res.status(400).send("market not found");
    }
})

// post method

router.post("/", (req,res)=>{
    console.log(req.body);
    markets.push(req.body)
    res.sendStatus(200);
})

module.exports = router
