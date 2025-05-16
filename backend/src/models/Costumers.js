import { Schema, model } from "mongoose";


const costumersShema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    telephone:{
        type: String,
        require: true
    },
    adress:{
        type: String,
        require: true
    },
    dui:{
        type: String,
        require: true
    }
},{
    timestamps: true,
    strict: false
});

export default model( "Costumers", costumersShema)