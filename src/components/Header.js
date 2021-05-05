import classes from "./Header.module.css";
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active}  to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
