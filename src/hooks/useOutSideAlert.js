import {useEffect,useState} from 'react'

export const useOutSideAlert=(ref)=>{
    const [isShow,setIsShow] = useState(true)
    useEffect(() => {
        const handleClickOutside=(event)=> {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsShow(true)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return {isShow,setIsShow}
}

