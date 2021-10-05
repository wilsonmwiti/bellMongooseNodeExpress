let mongoose = require('mongoose');
let ApiModel=require('../Model/ApiSchema')
let uri = 'mongodb://localhost:27017/designPhase'
let con;
(async () => {
    try {
        con = mongoose.createConnection(uri);
    } catch (error) {
        console.log(error);
    }

})()

async function  getAllApis(){
    let data = await con.collection('api_schemas').find().toArray()
    console.log(data);
    
    return data;
}

async function deleteApiId(api_id) {
    try {

        let data = await con.collection('api_schemas').findOne({ api_id: api_id})
        console.log(data);
        if (data != null)
            return data.api_id;
        throw new Error('empty api')
    } catch (error) {
        console.log(error);
    }
}

module.exports={getAllApis,deleteApiId};