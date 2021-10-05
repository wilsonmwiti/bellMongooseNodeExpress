let mongoose=require('mongoose');

let programModel=mongoose.Schema({
programs: [

    {
        type: Object,
        program_id:String,
        program_name: {
            type: String,
            required: true,
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
    },
]
})

let ProgramUnitModel=mongoose.model('program_model',programModel);
module.exports=ProgramUnitModel;