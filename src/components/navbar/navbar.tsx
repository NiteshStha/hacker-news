import './navbar.css';
import logo from '../../assets/images/y18.png';

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
        <img src={logo} alt="logo" className="nav-logo" />
        <div className="nav-title">Hacker News</div>
        <ul className="nav-list">
          {navItems.map((item, i) => (
            <li key={i}>{item}</li>
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
