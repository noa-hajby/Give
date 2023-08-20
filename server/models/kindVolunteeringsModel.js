const mongoose=require('mongoose')

const kindVolunteeringSchema=mongoose.Schema({
    titel:{type:String,require},
    detail:{type:String,require},
    minAge:{type:Number,require},
    img:{type:String,require}
})

module.exports=mongoose.model("kindVolunteerings",kindVolunteeringSchema)