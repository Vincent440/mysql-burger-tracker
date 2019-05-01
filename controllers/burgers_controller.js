const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

router.get("/",(req,res)=>{
    burger.all(burgers=>{
        res.render('index',{burgers});
    });
});

router.put("/burgers/update/:id",(req,res)=>{
    var condition = "id = " + req.params.id;
    burger.update({devoured:true},condition,result=>{
        console.log(result);
        res.status(200).end();
    });
});

router.post("/burgers/create",(req, res)=> {
    burger.create(["burger_name"], [req.body.newBurger],(result)=> {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

// Export routes for server.js to use.
module.exports = router;