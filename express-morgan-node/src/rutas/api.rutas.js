const express=require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.json({mensaje: 'api-mittrils'})
})

router.get('/:id', (req,res)=>{
    const id=parseInt(req.params.id);
    res.json({id,mensaje:'api-mittrils'})
})

router.post('/', (req, res)=>{
   res.json({mensaje:'api-mittrils', datos:req.body});
})

router.put('/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const {nombres, apellidos} = req.body;
    res.json({mensaje: "api-mittrils", datos:{id,nombres,apellidos}})
});
router.delete('/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    res.json({mensaje:'api-mittrils',datos:{id}})
})  

module.exports = router