let express=require('express')
let BusinessUnitRouter=express.Router()
// let loginRouter=require('./loginRouter')
// BusinessUnitRouter.use('/login',loginRouter);
BusinessUnitRouter.get('/',(req,res)=>{
    /**
     * @if (admin)
     *  show all awailable business units with programs with add and edit units and programs
     * @else 
     *  just show all availabe business units and programs
     */
    res.send("business unit");
   
})
BusinessUnitRouter.get('/new_business_unit',(req,res)=>{
    /**
     * @render a new business unit add form
     * @if 
     *  they select exist business unit then it will send a patch in edit Router
     * @else
     *  after click that save button it will send post request in add Router
     */
    res.send("new business unit");
})
BusinessUnitRouter.get('/new_program',(req,res)=>{
    /**
     * @render a new business unit add form
     * @if 
     *  they select exist business unit then it will send a patch in edit Router
     * @else
     *  after click that save button it will send post request in add Router
     */
    res.send("new program");
})

module.exports=BusinessUnitRouter;