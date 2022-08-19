const mongoose = require("mongoose")
const schema = mongoose.Schema
const productschema = new schema({
    title : {
        type : String,
        required : true
    },
    productimage :{
        type : String,
        required : true
    },
    price:{
        type : Number,
        required : true
    },
    quantity:{
        type:Number,
        required:true
    },
    instock:{
        type:Boolean,
        required:true
    },
    type:{
        type:String,
        required:true
    }
},
{timestamps: true}
)

module.exports = mongoose.model("product",productschema)