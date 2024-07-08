import React from "react";
import { UserItem } from "./types/types";

interface UserProfileProps {
  user: UserItem;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => (
  <div className="p-4 mb-4 bg-gray-800">
    <span className="font-bold mr-2">{user.name} |</span>
    <span className="font-bold mr-2">{user.username} |</span>
    <span className="font-bold mr-2">{user.email} |</span>
    <span className="font-bold mr-2">
      {user.address.street}, {user.address.suite}, {user.address.city},{" "}
      {user.address.zipcode}
    </span>
  </div>
);

export default UserProfile;
