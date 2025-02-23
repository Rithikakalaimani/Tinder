import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((store)=>store.user);
  console.log(user);
  return (
    <div>
      <div className='navbar bg-base-300'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl'>DEV Tinder</a>
        </div>
        {user && (
          <div className='flex-none gap-2'>
            <div className='dropdown dropdown-end mx-5 flex items-center'>
              <p className=' text-sm px-2'>
                Welcome,{" "}
                <span className='font-semibold'>Rithika {user.firstName}</span>
              </p>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <div className='w-10 rounded-full'>
                  <img
                    alt='Tailwind CSS Navbar component'
                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                    // src='{user.photoURL}'
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content bg-base-300 rounded-box z-[1]  w-52 p-2 shadow mt-36'
              >
                <li>
                  <a className='justify-between'>
                    Profile
                    <span className='badge'>New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
