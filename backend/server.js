const Express = require('express');
const app = Express()
const cors = require('cors')
const connection = require('./db.js')
const tasks = require('./routers/form')
const {val} = require('./models/task.js')

connection()

app.use(cors())
app.use(Express.json())

for(let i=0;i<9;i++){
    val.deleteOne().then(d=>console.log(d))
 }
 
app.use('/',tasks)




app.listen(8000 ,()=>{
    console.log(`Port on 8000`)
})