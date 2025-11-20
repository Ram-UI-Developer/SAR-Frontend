import React from 'react'
import { StudentsBarChart } from './StudentsBarChart'
import { AttendancePieChart } from './AttendancePieChart'
import { AdmissionsLineChart } from './AdmissionsLineChart'

const Dashboard = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3">
            <StudentsBarChart />
            <AttendancePieChart />
            <AdmissionsLineChart />
        </div>
    )
}

export default Dashboard