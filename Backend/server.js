require('dotenv').config()

const express = require('express')
const workouts = require('./routes/workouts')
const app=express()
const mongoose=require('mongoose')


app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.method + " " + req.path)
    next()
})
app.use('/api/workouts',workouts)
mongoose.connect(process.env.MONGO_URL)
.then(()=>{k
    app.listen(process.env.PORT, () => console.log('Server running on port ' + process.env.PORT))
})
.catch((error)=>{
    console.log(error)
})
app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the app'})
})



process.env