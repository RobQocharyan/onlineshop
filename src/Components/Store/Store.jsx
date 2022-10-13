import { Users } from "../Users/Users"
import "./Store.css"
import { useShoppingCart } from './../Context/Context';


 const Store = ()=>{
const {getItemCount,incrementCardCount,decrementCardCount,removeAllCart} = useShoppingCart()


    return (
        <div className='store'>

         {
            Users.map((item)=>{
               const count = getItemCount(item.id);


               return (
                  <div key={item.id} className="itemDiv">
                     <div className="imgDiv">
                        <img src={item.imgUrl}alt="" />
                      
                     </div>
                     <div className="itemSpans">
                           <span className="itemName">${item.name}</span>
                           <span className="itemPrice">${item.price}</span>
                     </div>
                     {count===0?(
                        <div className="itemButton">
                           <button type="submit"  onClick={()=>incrementCardCount(item.id)}>+ Add to Cart</button>
                        </div>
                     ):<div className="itemBuy">
                           <div className="itembuyButton">
                              <button type="submit"  onClick={()=>decrementCardCount(item.id)}>-</button>
                              <div className="incart">
                                 <span>{count}</span> in Cart
                              </div>
                              <button type="submit" onClick={()=>incrementCardCount(item.id)}>+</button>
                           </div>
                           

                           <div className="remove"><button type="submit" onClick={()=>removeAllCart(item.id)}>Remove</button></div>
                        
                        </div>
                        }
                     
                        
                  </div>
               )
            })
         }

        </div>
    )
 }

 export default Store