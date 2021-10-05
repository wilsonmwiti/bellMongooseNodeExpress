let express=require('express')
let deleteRouter=express.Router()
let apiService=require('../Services/ApiServices')

deleteRouter.delete('/:businessUnit',(req,res)=>{
    /**
     * @delete exist business unit
     */
     try {
        
        console.log(req.params.businessUnit);
        let data= apiService. getAllApis
            (req.params.businessUnit);
            res.json(data)
            
    } catch (error) {
    next(error)    
        
    }

})
deleteRouter.delete('/:businessUnit/:programs',(req,res)=>{
    /**
     * @delete exist programs
     */

     try {
        
        console.log(req.params.businessUnit);
        let data= apiService. getAllApis
            (req.params.businessUnit);
            res.json(data)
            
    } catch (error) {
    next(error)    
        
    }
})
deleteRouter.delete('/:businessUnit/:programs/:api_id',async(req,res)=>{
    /**
     * @delete exist api
     */

     try {
        
        console.log(req.params.api_id);
        let data= await apiService.deleteApiId(req.params.api_id);
            res.json(data)
            
    } catch (error) {
    // next(error)    
        
    }
})
module.exports=deleteRouter;

