import React from "react";
import {Link} from 'react-router-dom';
import './Header.scss';

import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/FireBaseUtils';
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/CartDropDown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelector";

const Header = ({currentUser, hidden}) => {
  return(
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/shop">CONTACT</Link>
        {
          currentUser ?
          <div className="option" onClick={() => auth.signOut()}> SIGN OUT </div>
          :
          <Link className="option" to="/signin">SIGN IN</Link>
        }
        <CartIcon/>
      </div>
      { hidden ? null : <CartDropDown/> }
    </div>

  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);