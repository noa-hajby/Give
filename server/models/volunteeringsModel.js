const mongoose=require('mongoose')

const volunteeringSchema=mongoose.Schema({
    name:{type:String,require},
    phoneConnect:{type:String,require},
    volunteering:{type:String,require},
    cityvolunteering:{type:String,require},
    detail:{type:String,require},
    kindVolunteering:{type:mongoose.Schema.Types.ObjectId,ref:'kindVolunteerings'},
    numDayOfWeek:{type:Number,require},
    dayOfWeekFevorite:{type:Number},
    duringTime:{type:Number},
    isRemoval:{type:Boolean,require},
})

module.exports=mongoose.model("volunteerings",volunteeringSchema)