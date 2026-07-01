const mongoose = require('mongoose');

const urlSchemas = new mongoose.Schema({
    shortID:{
        type:String,
        required:true,
    },
    redirectURL:{
        type:String,
        required:true,
    },
    visitHistory:[{timestamp:{type:Date,default:Date.now}}],
},
{
    timestamps:true,
});

const url = mongoose.model('url', urlSchemas);

module.exports=url;
