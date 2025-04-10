import React from 'react'
import DashboardProvider from './provide'

function DashboardLayout({ children }) {
return (
<div>
<DashboardProvider>
{children}</DashboardProvider>
    </div>
 )
}



export default DashboardLayout