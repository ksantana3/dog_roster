const mongoose = require("mongoose");

const DogSchema = new mongoose.Schema({
    name: {
        type: String, required: true, minlength: 2
    },
    breed: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}, {timestamps: true});

mongoose.model("Dog", DogSchema);