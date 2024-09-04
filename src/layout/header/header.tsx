import logo from '/header.png';
import { navItems } from '../../constant';
import { Link } from 'react-router-dom';
import { GrSearch } from 'react-icons/gr';

import './styles.css';
import { useMediaQuery } from '@uidotdev/usehooks';
import MobileNav from '../../components/mobileNav/MobileNav';

const Header = () => {
  const isSmall = useMediaQuery('only screen and (max-width: 600px)');

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      {isSmall ? (
        <MobileNav />
      ) : (
        <header className="w-full  z-40 absolute flex justify-center align-middle px-10 header">
          <nav className="h-1/6 w-full flex justify-between my-2">
            <div>
              <img src={logo} alt="..." height={'90%'} />
            </div>
            <div className="text-white w-1/2 flex justify-evenly  text-lg font-thin">
              {navItems &&
                navItems.map((item, index) => (
                  <Link
                    hrefLang={item.link}
                    key={index}
                    to={item.link}
                    className=" h-full  flex items-center flex-shrink "
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
            <div className="flex  items-center">
              <GrSearch
                className="text-2xl text-white"
                onClick={() => console.log('first')}
              />
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
