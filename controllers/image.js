const Clarifai=require('clarifai');
////FACE DETECTION API/////////
const app=new Clarifai.App({
    apiKey:'ed97ff51dcb846d6899c9486fb9e1ac0'
    });

const handleApiCall=(req,res)=>{
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL,req.body.input)
    .then(data=>res.json(data))
    .catch(err=>res.status(400).json('Image Uploaded Error API'+err))
}

const imageHandle=(req,res,db)=>{
    const {id}=req.body;
    db('users').where('id',id)
    .increment('entries',1)
    .returning('entries')
    .then(entries=>{
        res.json(entries[0])
    })
    .catch(err=>res.status(400).json('ERROR:Server.js:entries increment failed'))
   };
   module.exports={
       imageHandle:imageHandle,
       handleApiCall
   }