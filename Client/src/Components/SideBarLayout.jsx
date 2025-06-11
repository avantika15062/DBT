import React , {useState}from 'react'
import Sidebar from './Sidebar'

const SideBarLayout = ({user, children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className='layout'>
      <header className='topbar'>
        <button className='toggle-btn' onClick={ () => setIsSidebarOpen(prev => !prev) }> ☰</button>
      
      </header>

      <div className = {`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
        <Sidebar user ={user} />
      </div>

      <main className='main-content' >
        {children}

      </main>

    </div>
  )
}

export default SideBarLayout