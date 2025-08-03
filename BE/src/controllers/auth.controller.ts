import { generateJWT } from '../middleware/middleware';
import User from '../models/user'
import { Request,Response } from 'express'

interface UserInput{
    username:string,
    password:string
}
export async function signup(req:Request,res:Response){
    try {
        const user:UserInput = req.body;

        if (!user.username || !user.password) {
        return res.status(400).json({ message: 'Username and password are required' });
        }        

        const existingUser= await User.findOne({username:user.username});
        if(existingUser){
            return res.status(400).json({message:"user already exists"});
        }

        const newUser= new User(user);
        await newUser.save();
        const token= generateJWT(newUser.id);
        return res.status(201).json({message:"User created successfully", userId:newUser.id, Token:token})

    } catch (err:any) {
        console.error("signup error",err);
        return res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
}


export async function signin(req:Request, res:Response){

    try {
        const { username, password }: UserInput = req.body;

        if (!username || !password) {
           return res.status(400).json({ message: 'Username and password are required' });
        }

        const existingUser = await User.findOne({ username });

        if(!existingUser){
            return res.status(401).json({message: 'Invalid credentials'})
        }
        const token= generateJWT(existingUser.id);
        return res.status(200).json({ message: 'Signin successful', userId: existingUser.id, Token:token});

    } catch (err:any) {
        console.error("signin error", err);
        return res.status(500).json({ message: 'Internal Server Error', error: err.message });
        
    }
}