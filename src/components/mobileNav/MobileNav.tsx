import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import logo from '/header.png';
import './mobileNav.css';
import { navItems } from '../../constant';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <>
      <header className="relative">
        <div className="topbar absolute flex place-content-center align-middle py-2 w-full">
          <div className="h-full flex justify-center text-white text-3xl">
            {open ? (
              <IoClose onClick={handleOpen} />
            ) : (
              <IoIosMenu onClick={handleOpen} />
            )}
          </div>
          <div className="w-full flex justify-center">
            <img src={logo} alt="..." height={'90%'} />
          </div>
        </div>
      </header>
      {open && (
        <aside className={`navlinks ${open ? 'openlink' : ''}`}>
          <div className="bg-red-500">
            <Link to={'/login'} className="links text-white text-xl">
              Login
            </Link>
          </div>
          <div>
            {navItems &&
              navItems.map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  className="text-white block text-xl links"
                >
                  {item.name}
                </Link>
              ))}
          </div>
        </aside>
      )}
    </>
  );
};

export default MobileNav;
