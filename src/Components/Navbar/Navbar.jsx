
import { UserMenu } from ".."
import { useState } from "react"
import { useSelector } from "react-redux";
import { getLoginStatus,getUserData} from "../../features/userSlice";

export const Navbar = () => {
    const[showMenu,setShowMenu] = useState(false)
    const isUserLoggedIn = useSelector(getLoginStatus);
    const data = useSelector(getUserData);
    return (
        <div className='flex item-center justify-between shadow-lg p-2'>
            <div className='flex flex-col items-center justify-center'>
                <img src='icon-128x128.png' className='w-24 p-2' alt="loop logo"/>
                <span>LOOP</span>
            </div>
          { isUserLoggedIn && <div className='flex flex-col items-center justify-center'>
                <div>
                {/* <i className="fas fa-user-circle fa-4x" onClick={()=>{setShowMenu(!showMenu)}}></i> */}
                <img src={data.profileURL} onClick={()=>{setShowMenu(!showMenu)}} className='w-12 h-12' alt='user-image'/>
                <UserMenu showMenu={showMenu}setShowMenu={setShowMenu}/>
                </div>
            </div>
            }
        </div>
    )
}
