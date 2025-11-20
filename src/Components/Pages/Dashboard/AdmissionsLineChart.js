import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const AdmissionsLineChart = () => {
    const lineData = [
        { month: "Jan", admissions: 20 },
        { month: "Feb", admissions: 25 },
        { month: "Mar", admissions: 18 },
        { month: "Apr", admissions: 30 },
        { month: "May", admissions: 22 },
        { month: "Jun", admissions: 27 },
    ];
    return (
        <div className="w-full h-72 bg-white rounded-xl shadow p-4">
            <h2 className="font-semibold mb-2 text-purple-700">Monthly Admissions</h2>
            <div className="w-full h-[90%]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="admissions" stroke="#6D28D9" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
};