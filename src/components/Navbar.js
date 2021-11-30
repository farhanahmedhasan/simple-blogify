import { navData } from '../assests/data/navData';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
      <nav className=' text-pink-light border-b-2 border-white-dark h-16 flex items-center'>
        <div className='text-2xl'>Simple Blogify</div>

        {/* Nav Links Starts*/}
        <ul className='ml-auto space-x-4 flex items-center self-stretch'>
          {navData.map((item) => {
            const { name, link, id, extraClass } = item;
            return (
              <li
                key={id}
                className={`bg-white-light h-full flex items-center hover:bg-white-dark cursor-pointer ${extraClass}`}
              >
                <Link className='p-3' to={link}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* Nav Links Ends */}
      </nav>
    </div>
  );
};

export default Navbar;
