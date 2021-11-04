
// import header files
const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const{appModel}=require('./model')


// initialise
let app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//CORS policy
app.use( (req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET','POST');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials',true)
    next()
} )


// Db connection
mongoose.connect("mongodb+srv://suryapp:suryapp@cluster0.qq01r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")






//add
app.post('/add',async(req,res)=>{
   try{
    console.log(req.body)
    let app=new appModel(req.body)
    let result=await app.save()
    res.json(result)

   }
   catch(error)
   {
       res.status(500).send(error)

   }
})

//search
app.post('/searchmovie',async(req,res)=>{
    try {
        var result=await appModel.find(req.body)
        res.json(result)
        
    } catch (error) {
        res.send(500).send(error)  
        
    }
})

//get
app.get('/view',async(req,res)=>{
    try {
        var result=await appModel.find()
        res.json(result)
        
    } catch (error) 
    {
       res.send(500).send(error)
    }
})

//delete
app.post('/delete',async(req,res)=>{
    try {
        var result=await appModel.findByIdAndDelete(req.body)
        res.json({"status":"Successfully deleted"})
    } catch (error) {
      res.send(500).json({"status":"error"})  
    }
})

//update
app.post('/update',async(req,res)=>{
    try {
        var result=await appModel.findByIdAndUpdate(req.body._id,req.body)
        res.json({"status":"sucessfully updated"})
    } catch (error) {
        res.send(500).json({"status":"error"})
        
    }
})


app.listen(8080,()=>{
    console.log('running.....')
})