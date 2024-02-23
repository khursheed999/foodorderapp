import { useContext } from "react";
import Button from "./Button";
import CartContext from "../../Store/CartContext";

const CartItems=({item})=>{
        const {addItem,removeItem,items}= useContext(CartContext);
    
        function handleAddItem(){
        
            console.log(item);
            addItem(item);
            console.log(items)
        }
        function handleRemoveItem(getId){
            console.log(getId);
             removeItem(getId);
            // console.log(items)
        }
    return <li className="cart-item" index={item.id}>
    <p>{item.name}</p>
    <div className="cart-item-actions">
     <Button onClick={()=>{handleRemoveItem(item.id)}}>-</Button>
     {item.quantity}
     <Button onClick={handleAddItem}>+</Button>
    </div>
     </li>
}
export default CartItems;