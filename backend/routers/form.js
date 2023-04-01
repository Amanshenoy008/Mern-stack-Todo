const express = require('express');
const path = require('path');
const router = express.Router()
const {val} = require('../models/task')

router.post('/', async(req,res)=>{
        try {
                 val.findOne({task:req.body.task}).then(async d=>{
                        if(d != null){
                                res.send({
                                       'response':'Already exists'
                                })     
                        }
                        else{
                                const task = await new val(req.body).save()
                                res.send(task)
                        }
                 })
               
                
        } catch (error) {
                console.log(error)
                res.send(error)
        }
        
})

router.get('/', async (req,res)=>{
        try {
              const tasks = await val.find();
              res.send(tasks) 
        } catch (error) {
                res.send(error)
        }
})

router.delete('/:id',async (req,res)=>{
        try {
                val.findByIdAndDelete({_id:req.params.id}).then(d=>{
                        console.log(d)
                        res.send({'response':`id ${req.params.id} successfully deleted`})
                })
                .catch(err=>{
                        console.log(err)
                        res.send(err)
                })
                
        } catch (error) {
                console.log(error)   
                res.send(error)
        }
})




module.exports = router