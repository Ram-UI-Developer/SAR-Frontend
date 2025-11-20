import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const StudentsBarChart = () => {
    const barData = [
        { class: "1", students: 40 },
        { class: "2", students: 35 },
        { class: "3", students: 50 },
        { class: "4", students: 45 },
        { class: "5", students: 38 },
        { class: "6", students: 30 },
        { class: "7", students: 31 },
        { class: "8", students: 38 },
        { class: "9", students: 38 },
        { class: "10", students: 38 },
    ];
    return (
        <div className="w-full h-72 bg-white rounded-xl shadow pr-4 pt-4 pb-4 pl-0">
            <h2 className="font-semibold mb-2 text-purple-700 pl-4">Students per Class</h2>

            {/* Fix height here */}
            <div className="w-full h-[90%]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                        <XAxis dataKey="class" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="students" fill="#6D28D9" radius={[6, 6, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
};