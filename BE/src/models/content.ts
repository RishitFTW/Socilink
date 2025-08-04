import mongoose, { Types } from "mongoose";

const contentType = ['youtube', 'x', 'instagram', 'linkedin', 'pinterest', 'facebook'];

const contentSchema = new mongoose.Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentType, required: true },
  title: { type: String, required: true },
  tags: {
    type: [{ type: Types.ObjectId, ref: 'Tag' }],
    default: []
  },
  userId: { type: Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Content', contentSchema);
