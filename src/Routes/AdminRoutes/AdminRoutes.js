import { lazy } from "react";
import { Route } from "react-router-dom";
const Dashboard = lazy(() => import("../../Components/Pages/Dashboard/Dashboard"));
const ClassList = lazy(() => import("../../Components/Pages/Classes/ClassList"));
const StudentList = lazy(() => import("../../Components/Pages/Students/StudentList"));

export default [
    <Route path="/" element={<Dashboard />} />,
    <Route path="/classes" element={<ClassList />} />,
    <Route path="/students" element={<StudentList />} />
]