import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose, { connection } from 'mongoose';
import { connectionURL } from './key';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());


const CONNECTION_URL = connectionURL;
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then (() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
.catch((error) => error.message);

mongoose.set('useFindAndModify', false);