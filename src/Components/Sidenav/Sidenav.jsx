import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { getLoginStatus,getUserData} from "../../features/userSlice";
export const Sidenav = () => {
    const isUserLoggedIn = useSelector(getLoginStatus);
    return (
        <>
        {isUserLoggedIn &&
        <div className={`absolute border p-4 `}>
        <ul className='text-2xl p-4 leading-loose'>
        <li className='hover:text-blue-500'><Link to="/">HOME</Link></li>
            <li className='hover:text-blue-500'><Link to="/notifications">NOTIFICATIONS</Link></li>
            <li className='hover:text-blue-500'><Link to="/profile">PROFILE</Link></li>
            <li className='hover:text-blue-500'><Link to="/post">VIEW POST</Link></li>
        </ul>
    </div>
    }
    </>
    )
}
