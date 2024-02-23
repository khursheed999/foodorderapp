import { useContext } from "react";
import CartContext from "../../Store/CartContext";
import CartItems from "./CartItems";

const Cart=()=>{
   const{items}= useContext(CartContext);
    return <div className="cart">
        <h2>Your Cart</h2>
        <ul>{items.map(item=>(< CartItems key={item.id} item={item}/>))}
            </ul>
    </div>
}
export default Cart;