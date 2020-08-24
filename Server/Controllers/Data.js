var mongoose = require('mongoose')

const getData = new mongoose.Schema(
    {
       id : Number,
       title: String,
       price: Number,
       image: String,
       check: Boolean,
        type: String,
        description: String,
        
        
    }
)



module.exports=mongoose.model('data',getData)


