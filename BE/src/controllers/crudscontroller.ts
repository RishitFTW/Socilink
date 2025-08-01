import { Request, Response } from "express"
import Content from "../models/content";

export async function createContent(req:Request,res:Response){
  try {
    const { type, link, title, tags } = req.body;

    if (!type || !link || !title || !Array.isArray(tags)) {
      return res.status(400).json({ message: 'Invalid content data' });
    }
    //@ts-ignore
    const content = new Content({ type, link, userId: req.userId, title, tags });

    await content.save();

    return res.status(201).json({ message: 'Content created', content });
  } catch (error) {
    console.error('Error creating content:', error);
    return res.status(500).json({ message: 'Server error' });
  } 
}

export async function fetchContent(req:Request,res:Response){
    try {
      //@ts-ignore
        const userId = req.userId; 

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const contentList = await Content.find({ userId: userId });

        return res.status(200).json(contentList);

    } catch (error) {
        console.error("Error fetching content:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function removeContent(req:Request, res:Response){
  try {
    const { contentID } = req.params;

    if (!contentID) {
      return res.status(400).json({ message: "Content ID is required" });
    }

    const content = await Content.findById(contentID);

    if (!content) {
      return res.status(404).json({ message: "Content not found" });
    }
    await Content.findByIdAndDelete(contentID);

    return res.status(200).json({ message: "Content deleted successfully" });
  } catch (error) {
    console.error("Error deleting content:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function createLink(req:Request, res:Response){
  
}