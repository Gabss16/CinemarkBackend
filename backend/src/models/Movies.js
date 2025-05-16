import { Schema, model } from "mongoose";


const moviesShema = new Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    movieDirector:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true
    },
    year:{
        type: Number,
        require: true
    },
    duration:{
        type: Number,
        require: true
    },
    img:{
        type: String,
        require: true
    }
},{
    timestamps: true,
    strict: false
});

export default model( "Movies", moviesShema)