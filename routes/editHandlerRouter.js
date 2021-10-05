let express=require('express')
let editRouter=express.Router()
// let loginRouter=require('./loginRouter')
// editRouter.use('/login',loginRouter);
editRouter.patch('/:businessUnit',(req,res)=>{
    /**
     * @edit exist business unit
     */
     res.json(req.body);

})
editRouter.patch('/:businessUnit/:programs',(req,res)=>{
    /**
     * @edit exist programs
     */
     res.json(req.body);

})
editRouter.patch('/:businessUnit/:programs/:api',(req,res)=>{
    /**
     * @edit exist api
     */
     res.json(req.body);

})
module.exports=editRouter;

