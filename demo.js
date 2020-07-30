const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000

const dirPath = path.join(__dirname)
console.log(dirPath)


app.use(express.static(dirPath))


//------------------------General Scripts Basic Tage ------------------------------
app.get('/' , function (req , res){

    res.send("hello")

})

app.get('/*' , function (req , res){

    res.send("error")

})

console.log("started")

app.listen(port ,function (){
    console.log("server started at port :" + port)
})