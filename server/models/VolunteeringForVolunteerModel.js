const mongoose=require('mongoose')

const volunteeringForVolunteerSchema=mongoose.Schema({
    idVolunteering:{type:String,require},
    idVolunteer:{type:String,require},
    status:{type:String,require}
})

module.exports=mongoose.model("volunteeringForVolunteer",volunteeringForVolunteerSchema)