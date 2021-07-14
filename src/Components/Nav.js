import "./Nav.css";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);
  let data = JSON.parse(localStorage.getItem('userData'));
  let user = localStorage.getItem("user");
  const Logout = () =>{
    localStorage.setItem('user', false);
    localStorage.clear();
    window.location.href = '/';
  }
  return (
    <nav>
      <div className='nav__left'>Store</div>
      <div className='nav__middle'>
        {/* <div className='input__wrapper'>
          <input type='text' />
          <i className='fas fa-search' />
        </div> */}
      </div>
      <div className='nav__right'>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {user?<>{data.FirstName}</>:<>Guest user</>}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {user?<a class="dropdown-item" href="/" onClick={Logout}>Logut</a>:<a class="dropdown-item" href="/registration">Register</a>}
        </div>
      </div>
        <div className='cart__icon'>
          <i
            className='fa fa-shopping-cart'
            aria-hidden='true'
            onClick = {showHideCart}
          />
          {cartItems.length > 0 && (
            <div className='item__count'>
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
