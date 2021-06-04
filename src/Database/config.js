const mongoose = require('mongoose');
require('dotenv-safe').config();

mongoose.connect(process.env.MONGO, {
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("MongoDB connect!");
    }
});