
// Array de métodos ( C R U D)
const employeesController = {};
 
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
import employeesModel from "../models/Employees.js"
 
//SELECT
employeesController.getEmployees = async (req, res) => {
const employees = await employeesModel.find()
res.json(employees)
}
 

 
    //DELETE
    employeesController.deleteEmployees = async (req, res) => {
    await employeesModel.findOneAndDelete(req.params.id)
    res.json({message:"employees deleted"})
}




 
//UPDATE
employeesController.updateEmployees = async (req, res) => {
    
    //encriptar contraseña
    const passwordHash = await bcryptjs.hash(password, 10)
   //  Solicito todos los valores
    const {name, email, password, telephone, adress, position, hireDate , salary, dui} = req.body;
 
    await employeesModel.findByIdAndUpdate(req.params.id,{
        name, 
        email, 
        password: passwordHash, 
        telephone, 
        adress, 
        position, 
        hireDate, 
        salary, 
        dui
    },{new: true}
);
// muestro un mensaje que todo se actulizó
res.json({ message: "employees uptated"});
};

export default employeesController;