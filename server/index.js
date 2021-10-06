import express from 'express';
//import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { connectionURL } from './key.js';
import { Scores } from './models/Scores.js';

const app = express();

app.use(express.json());
app.use(cors());

const CONNECTION_URL = connectionURL;
const PORT = process.env.PORT || 3001;

mongoose.connect(CONNECTION_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.post("/insert", async (req, res) =>{

    const username = req.body.username;
    const counter = req.body.counter;
    const scoresModel = new Scores({username:username, counter:counter})

    try{
        await scoresModel.save();
        res.send("inserted data")
    } catch(err){
        console.log(err)
    }
}) 

app.get("/read", async (req, res) =>{
    Scores.find({}, (err, result)  => {
        if (err){
            res.send(err)
        }
        res.send(result)
    })
})

app.get("/readById", async (req, res) =>{
    Scores.find({}, (err, result)  => {
        const id = req.body.id
        const readCount = req.body.readCount
        if (err){
            res.send(err)
        }
        res.send(result)
    })
})


app.put("/update", async (req, res) => {
    const updateCount = req.body.updateCount;
    const id = req.body.id;

    try {
        await Scores.findById(id, (err, updatedCount) =>{
            updatedCount.counter = updateCount;
            updatedCount.save();
            res.send("update")
        });
    }catch(err){
        console.log(err);
    }
})

//test nodemon

app.listen(3001, () => {
    console.log("server running on 3001")
})

//mongoose.set('useFindAndModify', false);