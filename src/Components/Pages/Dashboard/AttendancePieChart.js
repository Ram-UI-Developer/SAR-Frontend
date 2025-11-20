import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export const AttendancePieChart = () => {
    const pieData = [
        { name: "Present", value: 85 },
        { name: "Absent", value: 15 },
    ];
    const COLORS = ["#6D28D9", "#C4B5FD"];
    return (
        <div className="w-full h-72 bg-white rounded-xl shadow p-4">
            <h2 className="font-semibold mb-2 text-purple-700">Attendance Overview</h2>
            <div className="w-full h-[90%]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={pieData}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={70}
                            label
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
};