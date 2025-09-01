import { Request, Response } from "express"
import Content from "../models/content";
import { random } from "../util";
import link from "../models/link";
import content from "../models/content";
import user from "../models/user";

export async function createContent(req:Request,res:Response){
  try {

    const { type, link, title } = req.body;

    if (!type || !link || !title) {
      return res.status(400).json({ message: 'Invalid content data' });
    }

    //@ts-ignore
    const content = new Content({ type, link, userId: req.userId, title });

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

        const contentList = await Content.find({ userId: userId },
          '_id title type link'
        );

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
   const share = req.body.share;
   try {
    if (share) {
            const existingLink = await link.findOne({
              //@ts-ignore
                userId: req.userId
            });

            if (existingLink) {
                res.json({
                    hash: existingLink.hash
                })
                return;
            }
            const hash = random(10);
            await link.create({
              //@ts-ignore
                userId: req.userId,
                hash: hash
            })

            res.json({
                hash:hash
            })
    } else {
        await link.deleteOne({
          //@ts-ignore
            userId: req.userId
        });

        res.json({
            message: "Removed link"
        })
    }     
   } catch (error) {
    console.error("Error sharing content:", error);
    return res.status(500).json({ message: "Internal server error" });   
   }

}

export async function getSharedContent(req: Request, res: Response) {
  try {
    const hash = req.params.shareLink;

    const linkData = await link.findOne({ hash });

    if (!linkData) {
      return res.status(411).json({
        message: "Sorry, incorrect share link.",
      });
    }

    const contentData = await content.find({ userId: linkData.userId });

    const userData = await user.findOne({ _id: linkData.userId });

    if (!userData) {
      return res.status(411).json({
        message: "User not found. This error should ideally not happen.",
      });
    }

    res.status(200).json({
      username: userData.username,
      content: contentData,
    });
  } catch (error) {
    console.error("Error in getSharedContent:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
