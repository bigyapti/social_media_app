import React from "react";
import { CommentItem } from "./types/types";

interface CommentProps {
  comment: CommentItem;
}

const Comment: React.FC<CommentProps> = ({ comment }) => (
  <li className="bg-gray-700 rounded-md p-2 mb-2">
    <p>
      <strong>{comment.name}</strong> ({comment.email}): {comment.body}
    </p>
  </li>
);

export default Comment;
