const mongoose=require('mongoose')

const statusVolenteeringSchema=mongoose.Schema({
    waitingForOk:{type:Boolean,require},
    confirmed:{type:Boolean,require},
    refuses:{type:Boolean,require},
})

module.exports=mongoose.model("statusVolenteering",statusVolenteeringSchema)
