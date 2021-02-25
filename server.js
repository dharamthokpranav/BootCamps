const http = require('http');
const express =require('express');
const dotenv= require('dotenv');
const router=require('./routes/router')
const morgan = require('morgan');
const connectDB=require('./config/db');
dotenv.config({path:'./config/config.env'});

const app=express();

//Body Pasrser
app.use(express.json());

// const logger=(req,res,next)=>{
//     req.hello="Pranav Middleware";
//     console.log(`${req.method} ${req.originalUrl}`);
//     next(); 
// }
// app.use(logger);
connectDB();
app.use(morgan('dev'));
app.use('/api/v1/bootcamps',router)



app.post('/ResChatBot', function (req, res) {
    //var mdata=[];
    // var chat_data=req.body;
    var chat_data=req.params.message;
    var arr=[];
    
    var success=false;
    var message_json={message_type:'',message:'',id:''};
    
    var msg_array=[  {'subject':'transfer','message':'How much money do you want to transfer'},{'subject':'deposite','message':'how much money you want to deposite'},{'subject':'balance','message':'select the account please'},{'subject':'name','message':'My name is Pranav'},{'subject':'work','message':'I work in Austere Systems'}];
    
    
    for(var i=0;i<msg_array.length;i++)
    {
            if(req.body.message.includes(msg_array[i].subject))
            {
                    console.log(msg_array[i].message);
                    break;
            }
    }
    var success_array=[ {'message_type':'in','message':msg_array[i].message} ];
    
    res.json(success_array);
    })

// a91c6D0199G0R61t

const PORT= process.env.PORT;
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on Port : ${PORT}`))
