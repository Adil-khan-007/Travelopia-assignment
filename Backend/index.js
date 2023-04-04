const express = require("express");
const cors = require("cors");
const connectDatabase = require("./configs/connectDatabase");
const Router = require("./Routes/AllRoutes");

const server = express();

server.use(express.json());

server.use(cors());

// server.use("/" ,(req,res)=>{
//     res.send("Working")
// })

server.use("/",Router)

const PORT = process.argv[2] || 3004;

server.listen(PORT,async ()=>{
    try{
        await connectDatabase();
        console.log(`server listening on port ${PORT}`)
    }
    catch(err){
        console.log(err.message);
    }
})

