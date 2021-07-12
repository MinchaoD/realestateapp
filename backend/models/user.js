const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },

});
userSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model('User', userSchema);