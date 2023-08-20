const volunteeringsModel=require('../models/volunteeringsModel')
//const { rawListeners } = require('../models/volunteeringsModel');




const getVolunteerings=async(req,res)=>{
try{ 
    let volunteerings=await volunteeringsModel.find();
    res.send(volunteerings)
}
        catch(error){
          res.json({"error":error})

        } 
    
    }

    const getVolunteeringsById=async(req,res)=>{
        try{
            let id=req.params.id
            let volunteerings=await volunteeringsModel.findById(id)
            res.send(volunteerings)

        }
        catch(error){
           res.json({"error":error})
        }
    }

    const deleteVolunteerings=async(req,res)=>{
try{
let id=req.params.id
let volunteerings=await  volunteeringsModel.findByIdAndDelete(id)
res.send(volunteerings+"deleted succesfully!!")
}
catch(arror){
res.json({"error":error})
}
    }

const addVolunteerings=async(req,res)=>{
    try{
        let newVolunteerings=new volunteeringsModel(req.body)
        await newVolunteerings.save()
        res.send("the new volunteerings added successfully!!")

    }
    catch(error){
        res.json({"error":error})
    }
}

const updateVolunteerings=async(req,res)=>{
try{
let id= req.params.id;
let newVolunteerings=(req.body)
await volunteeringsModel.findByIdAndUpdate(id,newVolunteerings)
rawListeners.send("the new volunteerings update successfully!!")
}
catch(error){
res.json({"error":error})
}
}
module.exports={getVolunteerings,getVolunteeringsById,addVolunteerings,updateVolunteerings,deleteVolunteerings}