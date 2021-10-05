let mongoose = require('mongoose')

let BusinessUserSchema = mongoose.Schema({
    business_name: {
        type: String,
        required: true,
        unique: true,
    },
    programs: [

        {
            program_id: {
                type: String,
                unique: true,
            },
            apis: [
                {
                    api_id: {
                        type: String,
                        unique: true
                    }
                }
            ]
        }
    ],

});
// let ApiBodySchema=mongoose.Schema({
//     body: {
//         api_id:{type:String,required:true,unique:true},
//         content_type:{type:String},
//         payload_content: { type: Object}
//     },
// })
let BusinessUserModel = mongoose.model('business_user', BusinessUserSchema);
// let ApiBodyModel=mongoose.model('api_body',ApiBodySchema)

module.exports = BusinessUserModel ;