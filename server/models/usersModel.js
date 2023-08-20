const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    userId:{type:Number,require},
    name:{type:String,require},
    addres:{type:String,require},
    city:{type:String,require},
    phone:{type:String,require},
    email:{type:String,require},
    age:{type:Number,require},
    nameUser:{type:String,require},
    passWord:{type:String,require},
    IsMan:{type:Boolean,require},
    IsWoman:{type:Boolean,require}

})

module.exports=mongoose.model("users",userSchema)

