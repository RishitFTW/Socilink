
import Bin from '../icons/Bin'
import Instagram from '../icons/Instagram';
import Linkedin from '../icons/Linkedin';
import ShareIcon from '../icons/ShareIcon'
import X from '../icons/X'
import Yt from '../icons/Yt'
import { XEmbed } from 'react-social-media-embed';
import { YouTubeEmbed } from 'react-social-media-embed';
import { FacebookEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { LinkedInEmbed } from 'react-social-media-embed';
import { PinterestEmbed } from 'react-social-media-embed';
import Fb from '../icons/Fb';
import Pinterest from '../icons/Pinterest';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_BASE_URL } from '../config';


interface CardProps{
    title:string,
    type:"youtube"| "x" | "linkedin" | "instagram" | "facebook" | "pinterest",
    link:string
    onSuccess:()=>void
    _id:string,
    shared:Boolean
}

const typeVariant={
  "youtube":<Yt/>,
  "x":<X/>,
  "linkedin":<Linkedin/>,
  "instagram":<Instagram/>,
  "facebook":<Fb/>,
  "pinterest":<Pinterest/>
}

function Card({title,type,link,onSuccess,_id,shared}:CardProps) {

const removeContent=async()=>{
   try {
    const token= localStorage.getItem('authToken')
    await axios.delete(`${API_BASE_URL}api/v1/check/content/${_id}`,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )
      toast.success('Bookmark removed')
      onSuccess();
   } catch (err) {
       console.error("Submission failed", err)    
       toast.error('Failed to remove bookmark. Please try again.');
   }
}

const copyLink=()=>{
   navigator.clipboard.writeText(link);
   toast.success('link copied')
}

  return (
    <div className="w-[290px] h-[320px] bg-white rounded-xl shadow-md hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden
">
        <div className='flex items-center ml-4 pt-4 '>
            <div className='pl-3 flex justify-center items-center'>
                {
                  typeVariant[type]
                }
                <div className='pl-6 font-medium  w-[180px]'>
                  {title}
                </div>
            </div>
            {!shared && (
              <div className='flex pl-2 gap-x-3'>
                <div onClick={copyLink} className='cursor-pointer'>
                  <ShareIcon />
                </div>
                <div onClick={removeContent} className='cursor-pointer hover:bg-amber-100'>
                  <Bin />
                </div>
              </div>
            )}        
        </div>
        <div className='mt-3 p-2 pt-[0.5px]'>

             {
             type=="youtube" ? (
              <div className='flex  justify-center'>
               <YouTubeEmbed url={link} width={325} height={260} />
            </div>
             ): type=="x" ? (
              <div className='flex  justify-center'>
              <  XEmbed url={link} width={325} height={260} />
            </div>
             ): type=="instagram" ? (
              <div className='flex  justify-center'>
               <InstagramEmbed url={link}  width={328} height={260} />
            </div>
             ): type=="facebook" ?(
              <div className='flex  justify-center'>
                <FacebookEmbed url={link} width={550} height={260} />
              </div>
             ): type=="linkedin" ?(
              <div className='flex  justify-center'>
                <LinkedInEmbed 
                  url={link} 
                  postUrl={link}
                  width={325}
                  height={260}  
                />
              </div>              
             ) :(
              <div className='flex  justify-center'>
                <PinterestEmbed 
                  url={link}
                  width={345}
                  height={260} 
                />
              </div>             
             )
             }
      
        </div>
    </div>
  )
}

export default Card