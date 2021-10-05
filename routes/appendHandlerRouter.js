let express=require('express')
let appendRouter=express.Router()

appendRouter.post('/:businessUnit',(req,res)=>{
    /**
     * @add new business unit here
     * 
     */
    res.json(req.body);
})
appendRouter.post('/:businessUnit/:programs',(req,res)=>{
     /**
     * @add new program here
     */
      res.json(req.body);

})
appendRouter.post('/:businessUnit/:programs/:api',(req,res)=>{
     /**
     * @add new Api here
     */
      res.json(req.body);

})
module.exports=appendRouter;