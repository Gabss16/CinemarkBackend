
import customersModel from "../models/Costumers.js"
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
import nodemailer from "nodemailer"
import crypto from "crypto"


import {config} from "../config.js"

const registerCustomersController = {};
registerCustomersController.register = async (req, res) => {
    const{name,
        email,
        password,
        telephone,
        adress,
        dui
    } = req.body;
    try{

        const existCustumer = await customersModel.findOne({email})
        if(existCustumer){
            return  res.json({message: "Custumer already exist"})
        }
        //encriptar contraseña
        const passwordHash = await bcryptjs.hash(password, 10)
        //guardar todo
        const newCustumer = new customersModel ({name, 
             email, 
             password:passwordHash, 
             telephone,
             adress,
             dui
            });
        await newCustumer.save()
        res.json({ message : "New customer saved"});
        

        

        //token
        jsonwebtoken.sign(
            //que voy a guardAR?
            {id: newCustumer._id},
            //secret word
            config.JWT.secret,
            //cuando expira
            {expiresIn: config.JWT.expiresIn}
            //arrow function
            (error,token => {
                if (error) console.log("error"+error)

                    res.cookie("authToken", token)
                    res.json({message: "cliente guardado"})
            })
                
        )

        
       

    } catch (error) {
        
        res.json({message:"error aqui" + error})
    }
};

 
 
export default registerCustomersController;