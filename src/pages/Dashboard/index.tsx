/* eslint-disable prettier/prettier */
import Navbar from "./Navbar";
import PostsPage from "./PostsPage";
import User from "./User";

const index = () => {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <User />
    </div>
  );
};

export default index;
