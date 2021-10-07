import logo from '../../logo.svg';
import classes from './Header.module.css';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <img src={logo} alt="logo"/>
      </Link>
    </header>
  );
}

export default Header;