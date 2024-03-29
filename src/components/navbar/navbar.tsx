import './navbar.css';
import logo from '../../assets/images/y18.png';
import { Link } from 'react-router-dom';

const navItems: string[] = [
  'new',
  'past',
  'comments',
  'ask',
  'show',
  'jobs',
  'submit',
];

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="nav-logo" />
          <div className="nav-title">Hacker News</div>
        </Link>
        <ul className="nav-list">
          {navItems.map((item, i) => (
            <li key={i}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <a href="#login" title="login" className="nav-login">
        login
      </a>
    </div>
  );
};

export default Navbar;
