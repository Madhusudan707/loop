
import { Link } from "react-router-dom"
import { useDispatch} from "react-redux";
import { logOutUserAsync } from "../../features/userSlice"
export const UserMenu = ({showMenu=false,setShowMenu}) => {
    const dispatch = useDispatch();

    const logout = ()=>{
        setShowMenu(false)
        dispatch(logOutUserAsync())
    }
    return (
        <div className={` ${showMenu?"":"hide"} flex flex-col absolute right-12 border p-4 bg-white`}>
            <ul className='text-2xl p-4 leading-loose'>
            <li className='hover:text-blue-500'><Link to="/">Home</Link></li>
                <li className='hover:text-blue-500'><Link to="/notifications">Notifications</Link></li>
                <li className='hover:text-blue-500'><Link to="/profile">Profile</Link></li>
                <li className='hover:text-blue-500'><button className='cursor-pointer' onClick={logout}>Logout</button></li>
            </ul>
        </div>
    )
}
