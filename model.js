const mongoose=require('mongoose')
let mongooseSchema=mongoose.Schema
const appSchema=new mongooseSchema({
    movieName:String,
    actor:String,
    actress:String,
    director:String,
    releasedYear:String,
    camera:String,
    producer:String,
    language:String
    
}
    
)
var appModel=mongoose.model("apps",appSchema)
module.exports={appModel}