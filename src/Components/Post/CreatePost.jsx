import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../features/userSlice";
import { createPostAsync, getLoadingStatus } from "../../features/postSlice";

export const CreatePost = () => {
  const [content, setContent] = useState("");
  const userId = useSelector(getUserId);
  const dispatch = useDispatch();
  const disableBtn = content.length > 0 && content.length <= 160;
  const color = { color: content.length > 160 ? "red" : "green" };
  const inputRef = useRef();
  const postOnClick = async () => {
      console.log(inputRef.current.innerText)
     
    dispatch(createPostAsync({ content, author: userId }))
    inputRef.current.innerText=""
    setContent("")
  };
  return (
    <div className="flex items-center justify-center h-36 mt-16">
      <div className="flex flex-col border w-1/3 ">
        <span
        ref={inputRef}
          contentEditable={true}
          suppressContentEditableWarning={true}
          className="p-4   focus:outline-none "
          onKeyUp={(e) => setContent(e.target.innerText)}
        >
          What's happening?
        </span>
        <div className="flex  justify-between p-4 ">
          <p className="p-2">
            <span style={color}>{content.length}</span>/160
          </p>
          <button className="p-4 btn btn-primary w-24 items-center text-lg" onClick={postOnClick} disabled={!disableBtn}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
