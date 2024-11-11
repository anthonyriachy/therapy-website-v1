// import { Request, Response } from "express";
// import User, { IUser, Role } from "../Models/User";

// interface TherapistRequestBody {
//     name: string;
//     email: string;
//     password: string;
//     phoneNumber: string;
//     specialty?: string;
//     bio?: string;
//     profilePicture?: string; 
// }

// export const registerTherapist=async(req:Request,res:Response):Promise<void>=>{
//     const {name,email,password,specialty,bio,phoneNumber,profilePicture}=req.body as TherapistRequestBody;
    
//     const userExists:IUser|null=await User.findOne({email});
//     if(userExists){
//         res.status(400).json({
//             error:true,
//             message:'User already exists',
//         })
//         return
//     }
//     const therapist:IUser=await User.create({
//         name,
//         email,
//         password,
//         role:Role.Therapist,
//         specialty,
//         bio,
//         phoneNumber,
//         profilePicture,
//         hasBookedFreeSession:false,
//     })
//     res.status(200).json({
//         error:false,
//         message:'User registered successfully',
//         data:therapist,
        
//     })

// }