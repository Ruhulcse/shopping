import "./Nav.css";
import { useContext} from "react";
import CartContext from "../context/cart/CartContext";

const Nav = () => {
  const { cartItems, showHideCart, showChild, child } = useContext(CartContext);
 
  return (
    <nav>
      <div className='nav__left'>
      {child?<button onClick={showChild} className="button">child</button>
      :<button onClick={showChild} className="button">parent</button>}
      </div>
      <div className='nav__middle'>
    
      </div>
      <div className='nav__right'>
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
