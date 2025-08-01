import mongoose, { Types } from "mongoose";

const contentType=['image', 'video', 'article', 'audio']

const contentSchema= new mongoose.Schema({
    link: {type:String, required: true},
    type: {type:String, enum:contentType, required:true},
    title: {type: String, required:true},
    tags: [{type:Types.ObjectId, ref: 'Tag'}],
    userId: {type:Types.ObjectId, ref:'User'}
})

export default mongoose.model('Content', contentSchema)
