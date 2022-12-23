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

    inProg:{
        type:Boolean,
        default:false
    },
    
    isImportant:{
        type:Boolean,
        default:false
    },

    date:{
        type:Date,
    },

    cat:{
        type:String,
        default:"Tasks"
    },

    notes:{
        type:String,
    }
})

module.exports = mongoose.model("Task",schema,"Tasks")