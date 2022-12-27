const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    status:{
        type:String,
        default:"to-do",
        required:true,
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