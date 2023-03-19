import './header.css';
import logo from '../../assests/images/logo.png'

function Header() {
  return (
    <div className="header">
      <span> <img src={logo}/> </span>
      <span className='header-menu'>Home | About | Contact us</span>
    </div>
  );
}

export default Header;
