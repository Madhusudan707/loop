
export const Navbar = () => {
    return (
        <div className='flex item-center justify-between shadow-lg p-2'>
            <div className='flex flex-col items-center justify-center'>
                <img src='icon-128x128.png' className='w-24 p-2' alt="loop logo"/>
                <span>LOOP</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <i className="fas fa-user-circle fa-4x"></i>
            </div>
        </div>
    )
}
