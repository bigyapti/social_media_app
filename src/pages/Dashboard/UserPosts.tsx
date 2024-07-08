import React from "react";
import Post from "./Post";
import { PostItem, CommentItem } from "./types/types";
import PostsPage from "./PostsPage";

interface UserPostsProps {
  posts: PostItem[];
  comments: CommentItem[];
  getRandomPhoto: () => { download_url: string } | null;
  userId: string;
}

const UserPosts: React.FC<UserPostsProps> = ({
  posts,
  comments,
  getRandomPhoto,
  userId,
}) => (
  <div className="">
    <PostsPage userId={userId} />
    <ul>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          comments={comments.filter((comment) => comment.postId === post.id)}
          getRandomPhoto={getRandomPhoto}
          userId={userId}
        />
      ))}
    </ul>
  </div>
);

export default UserPosts;
