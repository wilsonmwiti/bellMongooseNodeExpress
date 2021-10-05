let mongoose = require('mongoose');
let {BusinessUserModel,ApiBodyModel}=require('../Model/BuisnessUserModel')
let uri = 'mongodb://localhost:27017/designPhase'
let con, bu_collection;
(async () => {
    try {
        con = mongoose.createConnection(uri);
    } catch (error) {
        console.log(error);
    }
   bu_collection = await con.collection('program_models');

})()
async function  getAllBusinessUnits(){
    let data = await con.collection('program_models').find().toArray()
    console.log(data);
    // res.json(data)
    // return JSON.parse(data);
    return data;
}


module.exports= getAllBusinessUnits;