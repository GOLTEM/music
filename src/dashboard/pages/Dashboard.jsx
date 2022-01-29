import React from 'react'
import DashboardLayout from '../../layouts/DashboardLayout';

const Dashboard = () => {
    return (

        <DashboardLayout>
            <div className="flex flex-col my-6 px-6 w-full text-center">
                <p className='text-center text-black font-bold text-lg'>Welcome to the dashboard</p>
            </div>
        </DashboardLayout>
    )
}

export default Dashboard;