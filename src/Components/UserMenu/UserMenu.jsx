
import { Link } from "react-router-dom"
export const UserMenu = ({showMenu=false}) => {
    return (
        <div className={` ${showMenu?"":"hide"} flex flex-col absolute right-12 border p-4 bg-white`}>
            <ul className='text-2xl p-4 leading-loose'>
                <li className='hover:text-blue-500'><Link to="/notifications">Notifications</Link></li>
                <li className='hover:text-blue-500'><Link to="/profile">Profile</Link></li>
                <li className='hover:text-blue-500'><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    )
}
