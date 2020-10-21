import React from 'react'
import Header from '../../layout/Header/Header'
import Main from '../../layout/Main/Main'
import Sidebar from '../../layout/Sidebar/Sidebar'
import SidebarNav from '../../layout/SidebarNav/SidebarNav'
import './Dashboard.scss'

const Dashboard = () => (
  <div className="dashboard" data-testid="Dashboard">
    <Header />
    <div
      className="row no-gutters"
      style={{
        maxHeight: '94vh',
      }}
    >
      <SidebarNav />
      <Main />
      <Sidebar />
    </div>
  </div>
)

export default Dashboard
