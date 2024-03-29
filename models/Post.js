const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title:{type:String, required:true},
        description:{type:String, required:true},
        photo:{type:String},
        username:{type:String, required:true},
        categories:{type:Array, required:false},
    },
    {timestamps:true}
);

module.exports = mongoose.model("Post", postSchema);