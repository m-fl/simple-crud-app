import mongoose from "mongoose";

const PriceSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    item: {
        type: String,
        required: true,
    },
    
    price: {
        type: Number,
        required: true,
    }
});

export const Prices = mongoose.model("Prices", PriceSchema, "priceData");