
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import DashboardSkeleton from '../components/skeletons/DashboardSkeleton'
import { useParams } from 'react-router-dom'

interface Content{
    _id:string,
    link:string,
    type:string,
    title:string
}

function SharedContent() {
  
  const [bookmarks, setBookmarks] = useState<Content[]>([]);
  const [allBookmarks, setAllBookmarks] = useState<Content[]>([]);
  const [isFetchingData, setIsFetchingData] = useState<boolean>(false);

  const { hash } = useParams<{ hash: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetchingData(true);
        const response = await axios.get(`http://localhost:3000/api/v1/check/brain/share/${hash}`);
        const data = Array.isArray(response.data.content) ? response.data.content : [];
        setBookmarks(data);
        setAllBookmarks(data);
      } catch (error) {
        console.error("Error fetching shared content:", error);
        setBookmarks([]);
        setAllBookmarks([]);
      } finally {
        setIsFetchingData(false);
      }
    };

    fetchData();
  }, [hash]);

  if(isFetchingData){
    return <DashboardSkeleton/>
  }
  return (
    <div>
    <div className='relative flex'>
        <Sidebar contentData={allBookmarks} setBookmarks={setBookmarks} />
        <div className='pl-[255px]'>
            <div className='h-[80px] w-[1280px] flex border-b border-gray-200'>
                <div className='w-[66%] '>
                    <div className='text-3xl font-semibold text-gray-900 flex items-center gap-2 pl-28 pt-2'>📚 Library </div>
                    <div className='pl-28 text-sm text-gray-500 pt-1'>All your bookmarks at one place</div>
                </div>
                <div className=' w-[34%] flex justify-center items-center'>
                </div>
            </div>
            <div className='min-h-[697px] w-[1280px] bg-slate-100 flex flex-wrap gap-x-6 gap-y-6 p-6'>
                    {bookmarks.map((item:any)=>(
                        <Card key={item._id} title={item.title} type={item.type} link={item.link} _id={item._id} shared={true} onSuccess={()=>{}}/>
                    ))}
            </div>
        </div>
    </div>
</div>
  )
}

export default SharedContent