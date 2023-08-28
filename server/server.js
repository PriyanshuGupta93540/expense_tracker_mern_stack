import cors from "cors"
import express from 'express'
import Dbconnect from './Database/Db.js';
import TransactionRouters from "./routes/TransactionsApi.js"
import AuthRoutes from "./routes/AuthApi.js"
import passport from "passport";
import passportConfig from "./config/passport.js"

const app = express();
app.use(express.json());
app.use(passport.initialize());
passportConfig(passport);

app.use(cors())

app.use("/transaction", TransactionRouters)



app.use("/auth", AuthRoutes)

const PORT = 5000;



Dbconnect();
app.listen(PORT, ()=> {
    console.log(`Server is runnig on ${PORT}`);
});