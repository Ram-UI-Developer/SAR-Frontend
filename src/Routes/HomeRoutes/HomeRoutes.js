import { Route } from "react-router-dom"
import { lazy } from "react"
const Login = lazy(() => import("../../Components/Login/Login"))
const Landingpage = lazy(() => import("../../Components/Home/Landingpage"))

export default [
    <Route path="/" element={<Landingpage />} />,
    <Route path="/login" element={<Login />} />
]