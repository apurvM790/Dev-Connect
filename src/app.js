const express = require("express");
const connectDB = require("../src/config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json()) // middleware to convert json to javascript object or readable form...
app.use(cookieParser()); // middleware to parse cookies stored in the browser..

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);
app.use("/",userRouter);

connectDB()
.then(()=>{
    console.log("DataBase connected succesfully...!");
    
    app.listen(3000,()=>{
        console.log("Server is listening at port: ",3000);
    });

})
.catch(err=>{
    console.error("DataBase not connected...!");
});
