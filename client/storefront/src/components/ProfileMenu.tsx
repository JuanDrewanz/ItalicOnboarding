import { useState } from "react";
import { useAuth } from "../context/authContext";

export default function ProfileMenu() {
  const [isOpen, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <div className='relative m-5'>
      <div>
        <button
          onClick={handleClick}
          type='button'
          className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
          id='user-menu-button'
          aria-expanded='false'
          aria-haspopup='true'
        >
          <span className='sr-only'>Open user menu</span>
          <img
            className='h-8 w-8 rounded-full'
            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
          />
        </button>
      </div>
      {isOpen ? (
        <div
          className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='user-menu-button'
        >
          <p
            className='block px-4 py-2 text-sm text-gray-700'
            role='menuitem'
            id='user-menu-item-0'
          >
            {user.email}
          </p>
          <button
            onClick={() => logout()}
            className='block px-4 py-2 text-sm text-gray-700'
            role='menuitem'
            id='user-menu-item-2'
          >
            Sign out
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
