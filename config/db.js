const mongoose= require('mongoose');
const connectDB = async () =>{
const conn= await mongoose.connect(process.env.MongoURL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});
console.log(`Mongo Db connected ${conn.connection.host}`)
}

module.exports=connectDB;