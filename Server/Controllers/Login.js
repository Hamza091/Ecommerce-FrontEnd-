const { ObjectID, ObjectId } = require('mongodb')
var mongoose = require('mongoose')
const login = new mongoose.Schema(
    {
        // _id:{type:ObjectId,required:false},
        FirstName:{type:String,required:true},
        LastName:{type:String,required:true},
        Email:{type:String,required:true},
        Password:{type:String,required:true},
        Address:{type:String,required:true},
        PhoneNumber:{type:Number,required:true}
    }
)

module.exports=mongoose.model('userLogin',login,'login')
