
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import AddIcon from './icons/AddIcon'
import ShareIcon from './icons/ShareIcon'
import X from './icons/X'
import Yt from './icons/Yt'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='flex gap-x-2 h-screen'>
      <Sidebar/>
      <Card title="Healthy Lifestyle" type="youtube"/>
      <Card title="Tweet Title" type="X"/>
    </div>

  )
}

export default App
