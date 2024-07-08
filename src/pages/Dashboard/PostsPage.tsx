import React, { useState, useRef } from "react";
import Post from "./Post";
import { PostItem } from "./types/types";
import {
  FaImage,
  FaRegSmile,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPoll,
} from "react-icons/fa";

interface PostsPageProps {
  userId: string;
}

const PostsPage: React.FC<PostsPageProps> = ({ userId }) => {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [newPostContent, setNewPostContent] = useState<string>("");
  const [newPostImageUrl, setNewPostImageUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePostSubmit = () => {
    if (!newPostContent && !newPostImageUrl) {
      alert("Please provide either text content or an image URL.");
      return;
    }

    const newPost: PostItem = {
      userId: userId,
      id: posts.length + 1,
      title: "New Post",
      body: newPostContent,
      imageUrl: newPostImageUrl,
    };

    setPosts([...posts, newPost]);
    setNewPostContent("");
    setNewPostImageUrl("");
  };

  const handlePostContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewPostContent(e.target.value);
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNewPostImageUrl(url);
    }
  };
  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-2xl mx-auto shadow-md rounded-md p-6 text-white">
        <div className="mb-4 flex items-center">
          <textarea
            className="rounded-lg resize-none border border-gray-700 focus:outline-none focus:border-blue-500 px-4 py-2 w-full bg-black text-white placeholder-gray-500"
            placeholder="What is happening?!"
            value={newPostContent}
            onChange={handlePostContentChange}
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2 text-blue-500">
            <FaImage
              size={20}
              className="cursor-pointer"
              onClick={handleIconClick}
            />
            <FaPoll size={20} className="cursor-pointer" />
            <FaRegSmile size={20} className="cursor-pointer" />
            <FaCalendarAlt size={20} className="cursor-pointer" />
            <FaMapMarkerAlt size={20} className="cursor-pointer" />
          </div>
          <button
            onClick={handlePostSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4"
          >
            Post
          </button>
        </div>
        <input type="file" className="hidden" onChange={handleImageUrlChange} />
        <div className="mt-6 space-y-4">
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              userId={userId}
              comments={[]}
              getRandomPhoto={() => ({ download_url: post.imageUrl })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
