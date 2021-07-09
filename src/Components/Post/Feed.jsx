import { useSelector } from "react-redux";
import { getPostFeed } from "../../features/postSlice";
import { PostSnippet } from "./PostSnippet";
import { PostLoading } from "./PostLoading.jsx";
import { useFeed } from "./useFeed";


export const Feed = () => {
  const { postList, hasMore, postLoading } = useSelector(getPostFeed);
  const { lastPostElement } = useFeed();

  return (
    <div
      className="flex items-center justify-center mt-24 relative 
    w-full"
    >
     
      <div className="flex flex-col items-center relative">
        {postList.map((post, index) => {
          if (postList.length === index + 1) {
            return (
              <PostSnippet key={post._id} ref={lastPostElement} post={post} />
            );
          }
          return <PostSnippet key={post._id} post={post} />;
        })}
        {postLoading && <PostLoading />}
        {!hasMore && (
          <div className="font-semibold text-blue-400 mb-3 text-lg">
            No more posts! Maybe create one?
          </div>
        )}
      </div>
    

      {/* {!showCreatePostModal && (
        <div className="fixed bottom-6 right-4 md:right-96 md:bottom-16">
          <button
            onClick={() => setShowCreatePostModal(true)}
            className="rounded h-10 md:h-12 w-20 md:w-28 md:text-xl flex justify-center items-center bg-blue-400 font-bold text-white shadow-lg disabled:opacity-80"
          >
            Tweet
          </button>
        </div>
      )}
      {showCreatePostModal && (
        <CreatePost setShowCreatePostModal={setShowCreatePostModal} />
      )} */}
    </div>
  );
};
