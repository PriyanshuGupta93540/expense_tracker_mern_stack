import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    amount: Number, 
    description: String,
    date: {type: Date, default: new Date()},
    createdAt : {type: Date, default: Date.now},
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;