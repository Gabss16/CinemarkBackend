const costumersController = {};
 

import costumersModel from "../models/Costumers.js"
 
//SELECT
costumersController.getCostumers = async (req, res) => {
const costumers = await costumersModel.find()
res.json(costumers)
}
 

 
    //DELETE
    costumersController.deleteCostumers = async (req, res) => {
    await costumersModel.findOneAndDelete(req.params.id)
    res.json({message:"costumer deleted"})
}
 
//UPDATE
costumersController.updateCostumers = async (req, res) => {
//encriptar contraseña
const passwordHash = await bcryptjs.hash(password, 10)

   //  Solicito todos los valores
    const {name, email, password, telephone, adress, dui } = req.body;
 
    await costumersModel.findByIdAndUpdate(req.params.id,{
       name,
       email,
       password: passwordHash,
       telephone,
       adress,
       dui
    },{new: true}
);
// muestro un mensaje que todo se actulizó
res.json({ message: "costumer uptated"});
};

export default costumersController;