
import { useSelector, useDispatch } from "react-redux";
import { getUserData, updateUserImageAsync,updateUserBioAsync } from "../../features/userSlice";
import { useEffect, useRef, useState } from "react";
import { useOutSideAlert } from "../../hooks";
export const Profile = () => {
  const data = useSelector(getUserData);
  const [profileURL, setProfileURL] = useState(data.profileURL);
  const dispatch = useDispatch();
  const mountRef = useRef({ isMounted: false });
  const bioRef = useRef();
  const wrapperRef = useRef(null);
  const { isShow, setIsShow } = useOutSideAlert(wrapperRef);

  useEffect(() => {
    mountRef.current.isMounted = true;
    return () => (mountRef.current.isMounted = false); // eslint-disable-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=>{
    if(profileURL){
      dispatch(updateUserImageAsync({profileURL}))
    }
    
  },[profileURL])

  useEffect(()=>{
   
    if(bioRef.current.innerText){
     
     let bio = bioRef.current.innerText
      dispatch(updateUserBioAsync({bio}))
    }
    
  },[isShow])


  const openWidget = () => {
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
          uploadPreset: "ml_default",
          cropping: true,
        },
        (error, result) => {
          if (result.info?.secure_url) {
            setProfileURL(result.info.secure_url);
           
            console.log(profileURL)
          }
        }
      )
      .open();
  };

  const editBio = ()=>{
    setIsShow(false)
  }
  return (
    <div className="flex flex-col justify-center items-center h-96 w-full ">
      <div className="flex flex-col shadow-lg w-96 p-4 border" ref={wrapperRef}>
        <div className="flex items-center w-full ">
          {/* <i className="fas fa-user-circle fa-3x mr-4 cursor-pointer" onClick={openWidget}></i> */}
          <img src={data.profileURL} onClick={openWidget} className='w-12 h-12' alt='user-image'/>
          <span  className='p-2'>{data.name}</span>
          <span  className='p-2'>@{data.username}</span>
        </div>
        <div className="flex mt-8 items-center justify-between p-2">
          <div className="flex flex-col items-center">
            <span>0</span>
            <span>Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span>0</span>
            <span>Following</span>
          </div>
          <div className="flex flex-col">
            <span className="cursor-pointer">
              See all&nbsp;<i className="fas fa-location-arrow"></i>
            </span>
          </div>
        </div>
        <div className='flex flex-col mt-8'>
            <span className='font-bold'>Bio</span>
            <span ref={bioRef} onClick={editBio} contentEditable={true} suppressContentEditableWarning={true} className='border w-72 p-2 text-lg'>Hi there! I'm using Loop</span>
        </div>
      </div>
    </div>
  );
};
