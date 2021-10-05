let mongoose = require('mongoose')
let UserSchema = mongoose.Schema({
    user_id:String,
    first_name: { type: String, unique: true, reqiured: true },
    last_name: { type: String, unique: true, reqiured: true },
    email: { type: String, unique: true, reqiured: true },
    role: { type: String, unique: true, reqiured: true },
    username: { type: String, unique: true, reqiured: true },
    password: { 
        type: Object,
        temp_password:{
            type:String,
        },
        password:{
            type:String,
        }
    },
    mobile: { type: Number, unique: true, reqiured: true },
    token: { type: String, unique: true }
})
let userModel = mongoose.model('user_schema', UserSchema)
module.exports = userModel;
