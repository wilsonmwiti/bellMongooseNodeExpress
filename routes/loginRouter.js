let express=require('express')
let loginRouter=express.Router()
// loginRouter.use('/login',loginRouter);
//@check the login credentials
loginRouter.post('/',(req,res)=>{
    //here check the user credentials
    /*
        @if(true){
            redirect to --> home
        }
        @else{
            redirect to --> login page
        }
    */
})
module.exports=loginRouter;