let mongoose = require('mongoose')
let ApiSchema = mongoose.Schema({
    api_id: { type: String, unique: true },
    api_name: { type: String, unique: true, required: true, },
    url: { type: String, required: true, },
    method: { type: String, required: true, },
    description: { type: String },
    projects: [{ type: String }],
    params: [{ key: { type: String }, value: { type: String } ,description:{type:String}}],
    headers: [
        { key: { type: String }, value: { type: String } ,description:{type:String}}
    ],
    authorisation: {
        no_auth: { type: Boolean },
        basic_auth: [{ username: { type: String, unique: true }, password: { type: String, unique: true } }],
        bearer_token: [{ token: { type: String, unique: true } }],
        api_key: [{ key: { type: String, unique: true }, value: { type: String, unique: true } }]
    },
    body: {
        content_type: { type: String },
        content: { type: String }
    },
    setting: {
        type: Array,
    }
})
let ApiModel = mongoose.model('api_schema', ApiSchema)
module.exports = ApiModel;
