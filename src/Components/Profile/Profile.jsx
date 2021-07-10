
import { useSelector, useDispatch } from "react-redux";
import { getUserData, updateUserImageAsync,updateUserBioAsync,followUserAsync,unFollowUserAsync } from "../../features/userSlice";
import { useEffect, useRef, useState } from "react";
import { useOutSideAlert } from "../../hooks";
import { useNavigate, useParams } from "react-router";
import axios from 'axios'
export const Profile = ({isCurrentUser}) => {
  const { username } = useParams();
  // const data = useSelector(getUserData);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [profileURL, setProfileURL] = useState(data.profileURL);
  const currentUserData = useSelector(getUserData);
  const dispatch = useDispatch();
  const mountRef = useRef({ isMounted: false });
  const bioRef = useRef();
  const wrapperRef = useRef(null);
  const { isShow, setIsShow } = useOutSideAlert(wrapperRef);
  const currentUser = isCurrentUser || data?._id === currentUserData._id;

  useEffect(() => {
    mountRef.current.isMounted = true;
    (async () => {
      if (!currentUser) {
        try {
          mountRef.current.isMounted && setLoading(true);
          const res = await axios.get(`/users/${username}`);
          if (res.data?.success) {
            mountRef.current.isMounted && setData(res.data.user);
          }
        } catch (error) {
          console.error(error);
        } finally {
          mountRef.current.isMounted && setLoading(false);
        }
      } else {
        mountRef.current.isMounted && setData(currentUserData);
      }
    })();
    return () => (mountRef.current.isMounted = false); // eslint-disable-line react-hooks/exhaustive-deps
  }, [currentUser, currentUserData, username]);


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
          <button className='btn btn-primary' onClick={()=>{
            data.followersList.includes(currentUserData._id)?dispatch(unFollowUserAsync({ userId: data._id })):dispatch(followUserAsync({ userId: data._id }));
          }}>{data?.followersList?.includes(currentUserData._id)
                ? "Unfollow"
                : "Follow"}</button>
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
