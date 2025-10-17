import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req,res)=>{
  
    const message=`Hello KHadija , Iam POd ${os.hostname()}`
    res.send(message)

})

app.listen(PORT, ()=>{
    
    console.log(`Web Server is listing at port ${PORT}`)
    console.log(os.hostname())  


})
