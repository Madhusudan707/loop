
import { UserMenu } from ".."
import { useState } from "react"
export const Navbar = () => {
    const[showMenu,setShowMenu] = useState(false)
    return (
        <div className='flex item-center justify-between shadow-lg p-2'>
            <div className='flex flex-col items-center justify-center'>
                <img src='icon-128x128.png' className='w-24 p-2' alt="loop logo"/>
                <span>LOOP</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div>
                <i className="fas fa-user-circle fa-4x" onClick={()=>{setShowMenu(!showMenu)}}></i>
                <UserMenu showMenu={showMenu}/>
                </div>
            </div>
           
        </div>
    )
}
