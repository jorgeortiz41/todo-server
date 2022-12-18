const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    isDone:{
        type:Boolean,
        default: false,
        required:true
    },

    isFav:{
        type:Boolean,
        default:false
    },

    date:{
        type:Date,
    }
})

module.exports = mongoose.model("Task",schema,"Tasks")