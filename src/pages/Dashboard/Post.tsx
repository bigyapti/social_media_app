import React, { useState } from "react";
import Comment from "./Comment";
import { PostItem, CommentItem } from "./types/types";
import { FaRegCommentDots, FaHeart } from "react-icons/fa";

interface PostProps {
  post: PostItem;
  comments?: CommentItem[];
  getRandomPhoto: () => { download_url: string } | null;
  userId: string;
}
const Post: React.FC<PostProps> = ({
  post,
  comments = [],
  getRandomPhoto,
  userId,
}) => {
  const [click, setClick] = useState<boolean>(false);

  const [heartClick, setHeartClick] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const handleHeartClick = () => {
    setHeartClick(!heartClick);
    if (!heartClick) setCount((prevCount) => prevCount + 1);
  };

  const handlePostClick = () => {
    setClick(!click);
  };

  return (
    <li className="bg-gray-800 rounded-md p-4 mb-4 border-gray-900 border-2 cursor-pointer w-3/4 mx-auto flex flex-col">
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-lg">{post.body}</p>
      <div className="my-4">
        <img
          src={getRandomPhoto()?.download_url}
          alt="Random Photo"
          className=""
        />
        <div className="flex justify-between p-2">
          <FaRegCommentDots
            className=" text-gray-400 cursor-pointer mr-2"
            size={24}
            onClick={handlePostClick}
            aria-label="Toggle Comments"
          />
          <button
            onClick={handleHeartClick}
            className="outline-none bg-transparent"
            aria-label={heartClick ? "Unlike" : "Like"}
          >
            <FaHeart
              color={heartClick ? "red" : "gray"}
              size={24}
              className="cursor-pointer"
            />
            <p>+{count}</p>
          </button>
        </div>
      </div>
      {click && (
        <>
          <h4 className="text-lg font-bold mt-4 mb-2">Comments:</h4>
          <ul>
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </ul>
        </>
      )}
    </li>
  );
};

export default Post;
