import { Schema, model } from "mongoose";


const employeesShema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String

    },
    telephone:{
        type: String,
        require: true
    },
    adress:{
        type: String,
        require: true
    },
    position:{
        type: String,
        require: true
    },
    hireDate:{
        type: Date,
        require: true
    },
    
    salary:{
        type: Number,
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

export default model( "Employees", employeesShema)