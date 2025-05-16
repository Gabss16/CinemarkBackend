import express, { Router } from "express";
import moviesController from "../controllers/moviesController.js"
import multer from "multer";
//Router que nos ayuda a color métodos
// que tendrá mi ruta
 
 
//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();
 
 //configurar una carpeta multer
const upload = multer({dest: "public/"})


router.route("/")
.get(moviesController.getMovies)
.post(upload.single("img"),moviesController.createMovies)

export default router;