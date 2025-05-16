import {config} from "../config.js"
import moviesModel from "../models/Movies.js"

import { v2 as cloudinary } from "cloudinary";

//configurar cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})

const moviesController = {};
 


 
//SELECT
moviesController.getMovies = async (req, res) => {
const movies = await moviesModel.find()
res.json(movies)
}
 
// INSERT
moviesController.createMovies = async (req, res) => {
    const{ title, description, movieDirector,gender, year, duration } = req.body;
    let imageURL = ""

    //subir img
    if (req.file) {
        const result = await cloudinary.uploader.upload(
            req.file.path,
            {
                folder: "public",
                allowed_formats: ["png","jpg", "jpeg"]
            }
        )
        imageURL= result.secure_url
    }


    const newBrand = new moviesModel ({title, description, movieDirector,gender, year, duration ,img: imageURL});
    await newBrand.save()
    res.json({ message : "movies saved"});
};

//DELETE
moviesController.deleteMovies = async (req, res) => {
    await moviesModel.findOneAndDelete(req.params.id)
    res.json({message:"movies deleted"})
}
 
//UPDATE
moviesController.updateMovies = async (req, res) => {
   //  Solicito todos los valores
    const {title, description, movieDirector,gender, year, duration} = req.body;
 
    await moviesModel.findByIdAndUpdate(req.params.id,{
        title, description, movieDirector,gender, year, duration
    },{new: true}
);
// muestro un mensaje que todo se actulizó
res.json({ message: "movies uptated"});
};

 

export default moviesController;