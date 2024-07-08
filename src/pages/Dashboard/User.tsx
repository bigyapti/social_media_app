import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UserProfile from "./UserProfile";
import UserPosts from "./UserPosts";
import { UserItem, PostItem, CommentItem, PhotosItem } from "./types/types";
import {
  ProfileImage,
  CoverImage,
  VerifiedImage,
} from "../../assets/images/index";

const User = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserItem | null>(null);
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [photos, setPhotos] = useState<PhotosItem[]>([]);

  const fetchUser = async (userId: string) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchPosts = async (userId: string) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}/posts`
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts data:", error);
    }
  };

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?limit=200`
      );
      setPhotos(response.data);
    } catch (error) {
      console.error("Error fetching photos data:", error);
    }
  };

  const fetchComments = async (postId: number) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments?_start=0&_limit=1`
      );
      setComments((prevComments) => [...prevComments, ...response.data]);
    } catch (error) {
      console.error("Error fetching comments data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchUser(id);
      fetchPosts(id);
      fetchPhotos();
    }
  }, [id]);

  useEffect(() => {
    const fetchAllComments = async () => {
      for (const post of posts) {
        await fetchComments(post.id);
      }
    };

    if (posts.length > 0) {
      fetchAllComments();
    }
  }, [posts]);

  const getRandomPhoto = () => {
    if (photos.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * photos.length);
    return photos[randomIndex];
  };

  if (!id) {
    return <div>Loading...</div>; // Handle case where id is not yet available
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="p-10 text-white shadow-md rounded-md mx-auto overflow-y-auto w-3/4">
        <div className="relative w-full h-64">
          <img
            src={CoverImage}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Cover Photo"
          />
          <div className="absolute w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 opacity-30"></div>
          <div className="relative flex h-full flex-col justify-end p-2">
            <img
              src={ProfileImage}
              className="w-20 rounded-full border-4 border-white"
              alt="Profile Photo"
            />
            <span className="font-bold m-2 flex items-center">
              @{user?.username}
              <img className="rounded-full ml-2 w-4 h-4" src={VerifiedImage} />
            </span>
          </div>
        </div>
        {user && <UserProfile user={user} />}{" "}
        <UserPosts
          posts={posts}
          comments={comments}
          getRandomPhoto={getRandomPhoto}
          userId={id}
        />
      </div>
    </div>
  );
};

export default User;
