import {Outlet} from "react-router-dom"
import HomeNavbar from "../components/HomeNavbar"

const PageLayout = () => {
    return <>
    <HomeNavbar />
    <Outlet />
    </>
}

export default PageLayout