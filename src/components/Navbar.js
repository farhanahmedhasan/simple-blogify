import { navData } from '../assests/data/navData';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
      <nav className='navbar'>
        <Link to='/' className='text-2xl'>
          Simple Blogify
        </Link>

        {/* Nav Links Starts*/}
        <ul className='navbar__links'>
          {/* <div>Dark</div> */}
          {navData.map((item) => {
            const { name, link, id, extraClass } = item;
            return (
              <li key={id} className={`navbar__links__item ${extraClass}`}>
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
