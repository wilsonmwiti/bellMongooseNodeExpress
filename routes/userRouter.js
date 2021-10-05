let express=require('express')
let userRouter=express.Router()
// let loginRouter=require('./loginRouter')
// userRouter.use('/login',loginRouter);
userRouter.get('/',(req,res)=>{
    /**
     * @list all exsist user with add and edit option
     */
     res.json(req.body);

})
userRouter.post('/join/:user',(req,res)=>{
    /**
     * @append new user in the visual api
     */
     res.json(req.body);

})
userRouter.patch('/edit/:user',(req,res)=>{
    /**
     * @edit user in the visual api
     */
     res.json(req.body);

})


module.exports=userRouter;