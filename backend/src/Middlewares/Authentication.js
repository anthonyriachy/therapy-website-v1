import admin from 'firebase-admin'

const AuthMiddleware=async (req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({success:false, message: 'Unauthorized, no token provided' });
    }

    try{
        const decodedToken=await admin.auth().verifyIdToken(token);
        req.user=decodedToken;
        next();
    }catch(e){
        return res.status(401).json({success:false,message:'Unauthorized, invalid token'})
    }
}

export default AuthMiddleware