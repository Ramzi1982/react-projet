const express=require('express')
const app= express()
const mongoose=require('mongoose')
const routesUrl =require('./routes') 
const cors=require('cors')
mongoose.connect('mongodb+srv://user1:20588228aziz@cluster0.2x6lh.mongodb.net/?retryWrites=true&w=majority',()=>console.log('Database connected'))

/**body parser*/
app.use(express.json())
app.use(cors()) 
app.use('/app',routesUrl)
app.listen(4000,()=> console.log('server is running...'))