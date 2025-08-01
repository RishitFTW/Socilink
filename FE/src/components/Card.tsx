import React, { type ReactElement } from 'react'
import Bin from '../icons/Bin'
import ShareIcon from '../icons/ShareIcon'
import X from '../icons/X'
import Yt from '../icons/Yt'

interface CardProps{
    title:String,
    type:String,
    link?:String
    
}

function Card({title,type,link}:CardProps) {
  return (
    <div className="w-[320px] h-[320px] bg-white rounded-xl shadow-md hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden
">
        <div className='flex items-center ml-4 pt-4'>
            <div className='pl-3 flex justify-center items-center'>
                {
                  (type=="youtube")?<Yt/>:<X/>
                }
                <div className='pl-2 font-medium  w-[180px]'>
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
        <div className='mt-3 p-2'>

             {
             (type=="youtube") ?  <iframe className='w-full rounded-md' src="https://www.youtube.com/embed/iELDSVnj2hE?si=a2B-8NhLKj02dF-6" title="YouTube video player" 
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
             :
             <blockquote className="twitter-tweet">
              <a href="https://twitter.com/username/status/807811447862468608"></a> 
            </blockquote>
             }
      
        </div>
    </div>
  )
}

export default Card