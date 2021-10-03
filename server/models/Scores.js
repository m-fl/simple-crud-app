import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    counter: {
        type: Number,
        required: true,
    }
});

export const Scores = mongoose.model("Scores", ScoreSchema, "scoreData");
