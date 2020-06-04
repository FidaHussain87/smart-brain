const handleProfileGet=(req,res,db)=>{
    const {id}=req.params;
    db.select('*').from('users').where({id})
    .then(user=>res.json(user[0]))
    .catch(err=>ress.status(400).json(err))
}
module.exports={
    handleProfileGet:handleProfileGet
}