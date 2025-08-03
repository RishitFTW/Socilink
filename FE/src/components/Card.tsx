
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
import Fb from '../icons/fb';
import Pinterest from '../icons/Pinterest';

interface CardProps{
    title:String,
    type:"youtube"| "x" | "linkedin" | "instagram" | "fb" | "pinterest",
    link?:String
    
}

const typeVariant={
  "youtube":<Yt/>,
  "x":<X/>,
  "linkedin":<Linkedin/>,
  "instagram":<Instagram/>,
  "fb":<Fb/>,
  "pinterest":<Pinterest/>
}

function Card({title,type,link}:CardProps) {
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
            <div className='flex pl-2 gap-x-3'>
                <div className='cursor-pointer'>
                   <ShareIcon/>
                </div>
                <div className='cursor-pointer hover:bg-amber-100'>
                   <Bin/>  
                </div>             
            </div>          
        </div>
        <div className='mt-3 p-2 pt-[0.5px]'>

             {
             type=="youtube" ? (
              <div className='flex  justify-center'>
               <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={325} height={260} />
            </div>
             ): type=="x" ? (
              <div className='flex  justify-center'>
              <  XEmbed url="https://twitter.com/PixelAndBracket/status/1356633038717923333" width={325} height={260} />
            </div>
             ): type=="instagram" ? (
              <div className='flex  justify-center'>
               <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} height={260} />
            </div>
             ): type=="fb" ?(
              <div className='flex  justify-center'>
                <FacebookEmbed url="https://www.facebook.com/andrewismusic/posts/451971596293956" width={550} height={260} />
              </div>
             ): type=="linkedin" ?(
              <div className='flex  justify-center'>
                <LinkedInEmbed 
                  url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
                  postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
                  width={325}
                  height={260}  
                />
              </div>              
             ) :(
              <div className='flex  justify-center'>
                <PinterestEmbed 
                  url="https://in.pinterest.com/pin/321655598412607844/"
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