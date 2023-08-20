const statusVolenteeringModel=require('../models/statusModel')
//const { rawListeners } = require('../models/statusModel');



const getStatusVolenteering=async(req,res)=>{
try{ 
    let statusVolenteering=await statusVolenteeringModel.find();
    res.send(statusVolenteering)
}
        catch(error){
          res.json({"error":error})

        } 
    
    }

    const getStatusById=async(req,res)=>{
        try{
            let id=req.params.id
            let statusVolenteering=await statusVolenteeringModel.findById(id)
            res.send(statusVolenteering)

        }
        catch(error){
           res.json({"error":error})
        }
    }

//     const deleteStatusVolenteering=async(req,res)=>{
// try{
// let id=req.params.id
// let statusVolenteering=await  statusVolenteeringModel.findByIdAndDelete(id)
// res.send(statusVolenteering+"deleted succesfully!!")
// }
// catch(arror){
// res.json({"error":error})
// }
//     }

// const addStatusVolenteering=async(req,res)=>{
//     try{
//         let statusVolenteering=new statusVolenteeringModel(req.body)
//         await statusVolenteering.save()
//         res.send("the new user added successfully!!")

//     }
//     catch(error){
//         res.json({"error":error})
//     }
// }

const updateStatusVolenteering=async(req,res)=>{
try{
let id= req.params.id;
let newStatusVolenteering=(req.body)
await statusVolenteeringModel.findByIdAndUpdate(id,newStatusVolenteering)
rawListeners.send("the new statusVolenteering update successfully!!")
}
catch(error){
res.json({"error":error})
}
}
module.exports={getStatusVolenteering,getStatusById,updateStatusVolenteering}