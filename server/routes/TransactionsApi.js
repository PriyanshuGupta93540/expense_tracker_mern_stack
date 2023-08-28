import { Router } from "express";
import Transaction from "../models/transaction.js";
import passport from "passport";
import authenticateToken from "../config/jwtToken.js"

const router = Router();

router.get("/", authenticateToken, async (req, res)=> {
    const transaction = await Transaction.find({}).sort({createdAt: -1});
    res.json({data: transaction});
})





// For the post transaction

router.post("/", async (req, res)=> {
    const {amount, description, date} = req.body;
    const transaction = new Transaction ({
        amount: amount,
        description: description,
        date: date,
    })
     await transaction.save();
    res.json({message: "Success"});
})


router.delete('/:id', async(req, res)=> {
   await Transaction.findByIdAndDelete(req.params.id);
   res.json({message: "success"}); 
})

router.patch("/:id", async(req, res)=> {
    await Transaction.updateOne({_id: req.params.id}, {$set: req.body})
    res.json({message:"success"});
})

export default router;