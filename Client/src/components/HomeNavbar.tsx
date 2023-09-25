import { Link } from "react-router-dom"
import MenuLogo from "../assets/MenuLogo.jpg"
import MenuData from "../data/MenuData"

const HomeNavbar = () => {
    return <>
    <div className="flex items-center px-20 justify-between fixed bg-white bg-opacity-90">
        <div className="w-1/12">
            <img src={MenuLogo} alt="Logo"/>
        </div>
        <div className="flex justify-between">
            {MenuData.map(data => <>
            <Link className="font-semibold mr-10 hover:text-yellow-500" to={data.link}>{data.label}</Link>
            </>)}
        </div>
        <div className="border-2 border-yellow-400 text-yellow-500 hover:bg-yellow-400 hover:text-white font-semibold rounded-full py-2 px-10"><Link to={"/"}>Đăng Ký Học</Link></div>
    </div>
    

    </>
}

export default HomeNavbar