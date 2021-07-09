
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
    
           <div className='flex flex-col h-screen justify-center items-center'>
               <div className="flex flex-col items-center justify-center shadow-lg border">
                <div className='flex mb-8 p-4'>
                    <h1 className='text-3xl'>Welcome To LOOP!!!</h1>
                </div>
                <div className='flex items-center justify-between w-96  p-4'>
                <Link to="/sign-in"><button className='btn btn-primary'>Sign-In</button></Link>
                OR
                <Link to="/sign-up"><button className='btn btn-primary'>Sign-Up</button></Link>
                </div>
               </div>
              
              
           </div>
        </>
    )
}
