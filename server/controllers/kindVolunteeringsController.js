const kindVolunteeringModel= require('../models/kindVolunteeringsModel')
//const { rawListeners } = require('../models/kindVolunteeringsModel');



const getKindVolunteering=async(req,res)=>{
try{ 
    let kindVolunteering=await kindVolunteeringModel.find();
    res.send(kindVolunteering)
}
        catch(error){
          res.json({"error":error})

        } 
    
    }

    const getKindVolunteeringById=async(req,res)=>{
        try{
            let id=req.params.id
            let kindVolunteering=await kindVolunteeringModel.findById(id)
            res.send(kindVolunteering)

        }
        catch(error){
           res.json({"error":error})
        }
    }

    const deleteKindVolunteering=async(req,res)=>{
try{
let id=req.params.id
let kindVolunteering=await  kindVolunteeringModel.findByIdAndDelete(id)
res.send(kindVolunteering+"deleted succesfully!!")
}
catch(arror){
res.json({"error":error})
}
    }

const addKindVolunteering=async(req,res)=>{
    try{
        let kindVolunteering=new kindVolunteeringModel(req.body)
        await kindVolunteering.save()
        res.send("the new kindVolunteering added successfully!!")

    }
    catch(error){
        res.json({"error":error})
    }
}

const updateKindVolunteering=async(req,res)=>{
try{
let id= req.params.id;
let newKindVolunteering=(req.body)
await kindVolunteeringModel.findByIdAndUpdate(id,newKindVolunteering)
rawListeners.send("the new kindVolunteering update successfully!!")
}
catch(error){
res.json({"error":error})
}
}
module.exports={getKindVolunteering,getKindVolunteeringById,deleteKindVolunteering,addKindVolunteering,updateKindVolunteering }