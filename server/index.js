import express from 'express';
//import bodyParser from 'body-parser';
//import cors from 'cors';
import mongoose from 'mongoose';
import { connectionURL } from './key.js';
import { Scores } from './models/Scores.js';

const app = express();

app.use(express.json());


const CONNECTION_URL = connectionURL;
const PORT = process.env.PORT || 3001;

mongoose.connect(CONNECTION_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.get("/", async (req, res) =>{
    const scoresModel = new Scores({username:"test", counter:420})

    try{
        await scoresModel.save();
        res.send("inserted data")
    } catch(err){
        console.log(err)
    }
}) 

app.listen(3001, () => {
    console.log("server running on 3001")
})

//mongoose.set('useFindAndModify', false);