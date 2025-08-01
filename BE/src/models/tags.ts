import mongoose from "mongoose";

const tagSchema= new mongoose.Schema({
    title:{type:String, required:true}
})

export default mongoose.model('Tag', tagSchema)
