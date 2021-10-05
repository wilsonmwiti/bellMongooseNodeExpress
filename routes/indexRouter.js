let express=require('express')
let indexRouter=express.Router()
let loginRouter=require('./loginRouter')
let BusinessUnitRouter=require('./businessUnitRouter')
let editRouter=require('./editHandlerRouter')
let appendRouter=require('./appendHandlerRouter')
let userRouter=require('./userRouter')
let deleteRouter=require('./deleteHandlerRouter.js')

indexRouter.use('/login',loginRouter);
indexRouter.use('/home',BusinessUnitRouter)
indexRouter.use('/edit',editRouter)
indexRouter.use('/add',appendRouter)
indexRouter.use('/user',userRouter)
indexRouter.use('/delete',deleteRouter)

indexRouter.get('/',(req,res)=>{
  /**
  * @render a login page
  */

  res.send("hello");
})
indexRouter.get('/logout',(req,res)=>{
  /**
  * @clear the session cookies and redirect to the login page
  */
})
module.exports=indexRouter;