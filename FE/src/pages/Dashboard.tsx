
import Sidebar from '../components/Sidebar'
import Button from '../components/Button'
import ShareIcon from '../icons/ShareIcon'
import AddIcon from '../icons/AddIcon'
import Card from '../components/Card'
import { useEffect, useState } from 'react'
import Modal from '../components/Modal'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import DashboardSkeleton from '../components/skeletons/DashboardSkeleton'
import { API_BASE_URL } from '../config'

interface contents{
    _id:string,
    link:string,
    type:string,
    title:string
}

function Dashboard() {

  const [open, setOpen]= useState(false);
  const [allBookmarks, setAllBookmarks]= useState<contents[]>([]);
  const [bookmarks, setBookmarks]= useState<contents[]>([]);
  const [refreshTrigger, setRefreshTrigger]= useState(0);
  const [isFetchingData, setIsFetchingData] = useState(false)

  const navigate= useNavigate();

  useEffect(()=>{
    const token=localStorage.getItem('authToken');
    if(!token){
        navigate('/')
        return;
    }
    
    const fetchData=async()=>{
        setIsFetchingData(true);
        try {
         const BookmarksData= await axios.get(`${API_BASE_URL}api/v1/check/content`,
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )   
        setBookmarks(BookmarksData.data);
        setAllBookmarks(BookmarksData.data) 
        } catch (err) {
            console.error('Failed fetching bookmarks:', err)
        } finally{
           setIsFetchingData(false);
        }
       
    } 
    fetchData();
  },[refreshTrigger])

  const handleShare=async()=>{
    try {
        const token= localStorage.getItem('authToken')
        const res= await axios.post(`${API_BASE_URL}api/v1/check/brain/share`,
            {share:true},
            {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
        )
        const hash= await res.data.hash
        const finalURL= `https://socilink-1.onrender.com/shared/${hash}`
        await navigator.clipboard.writeText(finalURL)
        toast.success("Link copied");
    } catch (err) {
        console.error("Submission failed", err)   
        toast.error('Failed to share bookmarks. Please try again.');
    }
  }
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
                    <div className='flex pl-8'>
                        <div>
                            <Button onClick={handleShare} variant='primary'  startIcon={<ShareIcon/>} text="Invite"/>
                        </div>
                        <div className='pl-3'>
                            <Button onClick={() => setOpen(true)}  variant='secondary'  startIcon={<AddIcon/>} text="Add Content"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='min-h-[697px] w-[1280px] bg-slate-100 flex flex-wrap gap-x-6 gap-y-6 p-6'>
                    {bookmarks.map((item:any)=>(
                        <Card key={item._id} title={item.title} type={item.type} link={item.link} _id={item._id} shared={false} onSuccess={()=>{setRefreshTrigger(prev=>prev+1)}}/>
                    ))}
            </div>
        </div>
    </div>
    {open && <Modal onSuccess={()=>{ setOpen(false); setRefreshTrigger(prev=>prev+1)}} onClose={()=>setOpen(false)}/>}
</div>
  )
}

export default Dashboard