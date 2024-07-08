/* eslint-disable prettier/prettier */
import logo from '../../assets/images/logo.png'; 
const Navbar = () => {
  return (
    <div className='flex justify-between p-4'>
        <div>
            <img className="w-10 h-10" src={logo} alt="" />
        </div>
        <div>
            <a href="/login" className='text-white'>Sign Out</a>
        </div>
    </div>
  )
};

export default Navbar;
