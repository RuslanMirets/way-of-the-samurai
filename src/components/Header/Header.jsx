import logo from '../../logo.svg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="/">
        <img src={logo} alt="logo"/>
      </a>
    </header>
  );
}

export default Header;