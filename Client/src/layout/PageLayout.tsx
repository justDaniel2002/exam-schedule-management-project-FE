import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar"

const PageLayout = () => {
    return <>
    <Navbar />
    <Outlet />
    </>
}

export default PageLayout