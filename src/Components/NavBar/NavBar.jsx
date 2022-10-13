import "./NavBar.css"
import { Link } from 'react-router-dom';
import { useShoppingCart } from './../Context/Context';


const NavBar = ()=>{

    const {openCart,cartCount,cartOpen} = useShoppingCart()
   
      


    return (
        <div className="navbar">
            <ul>
                <li><Link to={"/home"}>Home</Link></li>
           
                <li><Link to={"/about"}>About</Link></li>
            
                <li><Link to={"/store"}>Store</Link></li>
            </ul>
            {cartCount>0&&(
            <div>
                <div className="navbarShope">
                    <div className="navbarShopeImage" onClick={openCart}> 
                        <img src={require("../../images/shopping-cart.png")} alt=""   />
                    </div>
                </div>
                <div className="countPrice">

                    
                    {cartCount}
                </div>
            </div>
        )}

        </div>
    )
}

export default NavBar