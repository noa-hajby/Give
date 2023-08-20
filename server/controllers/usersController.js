//const { rawListeners } = require('../models/usersModel');
const usersModel = require('../models/usersModel')

const tryLoggin=async(req,res)=>{
    try{
     let email = req.params.email, passWord = req.params.passWord;
     console.log('email, pass', email, passWord)
     let user = await usersModel.findOne({email:email,passWord:passWord})
     console.log('USER', user);
     if(user!=null)
     res.json({ans:true, user})
     else res.json({ans:false})
    }
    catch(error){
        res.json({"error":error})
    }
}


const getUsers=async(req,res)=>{
try{ 
    let users=await usersModel.find();
    res.json(users)
}
        catch(error){
          res.json({"error":error})

        } 
    
    }

    const getUserById=async(req,res)=>{
        try{
            let id=req.params.id
            let user=await usersModel.findById(id)
            res.json(user)

        }
        catch(error){
           res.json({"error":error})
        }
    }

    const deleteUser=async(req,res)=>{
try{
let id=req.params.id
let user=await  usersModel.findByIdAndDelete(id)
res.json(user+"deleted succesfully!!")
}
catch(arror){
res.json({"error":error})
}
    }

const addUser=async(req,res)=>{
    try{
        let newUser=new usersModel(req.body)
        await newUser.save()
        res.json("the new user added successfully!!")

    }
    catch(error){
        res.json({"error":error})
    }
}

const updataUser=async(req,res)=>{
try{
let id= req.params.id;
let newUser=(req.body)
await usersModel.findByIdAndUpdate(id,newUser)
rawListeners.json("the new user update successfully!!")
}
catch(error){
res.json({"error":error})
}
}
module.exports={tryLoggin,getUsers,getUserById,deleteUser,addUser,updataUser}