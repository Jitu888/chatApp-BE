const  jwt = require('jsonwebtoken');
const secret =  "Youth_is_ready"
exports.generate_token = (data, expiresIn = "1d") => {
    return jwt.sign({ data }, secret, { expiresIn });
  };

exports.verify_token = async(req, res, next) => {

  const {token} = req.query;
  //console.log("token>..>>>>>>>>>>>",token)
  try {
    const decoded = await Promise.resolve(jwt.verify(token, secret));
    console.log("decoded========>",decoded)
     req.body.token = decoded;
     next();
  } catch (error) {
    next(error);
  }
  
}

exports.verifyUser = async (req,res,next)=>{
 try{
  this.verify_token(req,res,next,()=>{
    if(req.user.id===req.query.id || req.user.isAdmin){
        next()
    }
})}
    catch(error){
        next(error)
    }


}

exports.verifyAdmin = async (req,res,next)=>{
    try{
     this.verify_token(req,res,next,()=>{
       if(req.user.isAdmin){
           next()
       }
   })}
       catch(error){
           next(error)
       }
   
   
   }