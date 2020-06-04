const express=require('express');
const bodyParser=require('body-parser');
const bcrypt=require('bcrypt-nodejs')
const cors=require('cors');
const knex=require('knex');
const app=express();
const register=require('./controllers/register');
const signin=require('./controllers/signin');
const profile=require('./controllers/profile');
const image=require('./controllers/image');
/////CONNECTING DATABASE////////////
const db=knex({
    client:"pg",
    connection:{
        host:'127.0.0.1',
        user:'postgres',
        password:'admin',
        database:'smartbrain'
    }
});
////////////EXECUTING QUARIES///////////////
// db.select('*').from('users').then(data=>console.log(data));
app.use(bodyParser.json());
app.use(cors());


/////ROUTESSSSS///////////
app.get('/',(req,res)=>{
    res.send(database.users);
})
app.post('/signin',(req,res)=>{signin.handleSignin(req,res,db,bcrypt)})
app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bcrypt)})
app.get('/profile/:id',(req,res)=>{profile.handleProfileGet(req,res,db)});
app.put('/image',(req,res)=>{image.imageHandle(req,res,db)});
app.post('/imageurl',(req,res)=>{image.handleApiCall(req,res)});

app.listen(process.env.PORT || 3001,()=>{
    console.log("App is running on port 3001..");
});