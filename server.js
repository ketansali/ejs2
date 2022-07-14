const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')



const app = express()

app.use(bodyParser())
app.use(cors())



// app.set("views",path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine',"ejs")

app.get("/",(req,res)=>[
    res.render('index',{
        users : [
            {name : "ketan"},
            {name : "Dipak"}
        ]
    })
])


app.listen(4000,()=>{
    console.log('server is Running on PORT 4000');
})