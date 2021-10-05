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

async function getBusinessunit(title) {
    try {

        let data = await con.collection('business_users').find()
        console.log(data);
        if (data != null)
            return data.categories;
        throw new Error('empty')
    } catch (error) {
        console.log(error);
    }
}

module.exports={getBusinessunit};