import mongoose from "mongoose";

const Mongodburl = "mongodb+srv://priyanshugupta4019:CjqHYKqCQ7qNJ8XO@priyanshu.lzfhidv.mongodb.net/expensetracker?retryWrites=true&w=majority"

const Dbconnect = async () => {
    try{
        await mongoose.connect(Mongodburl, {
           useNewUrlParser : true, 
        });
        console.log(`Connected to Mongodb at ${Mongodburl}`);
    } catch(error){
        console.log("Error connecting to Mongodb:", error.message)
    }
}

export default Dbconnect;