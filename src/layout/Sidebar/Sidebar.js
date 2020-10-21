import React from 'react'
import ChatList from '../../components/ChatList/ChatList'
import StartedProjects from '../../components/StartedProjects/StartedProjects'
import './Sidebar.scss'

const Sidebar = () => (
  <div className="sidebar col-12 col-xl-2" data-testid="Sidebar">
    <StartedProjects />
    <ChatList />
  </div>
)

export default Sidebar
