import Button from "./UI/Button";
import Cart from "./UI/Cart";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
const Model=()=>{
    const {setModelPopUp}=useContext(CartContext);
    return <div className="modal">
        <Cart/>
        <div className="modal-actions">
            <Button className="text-button" onClick={()=>setModelPopUp(false)}>Close</Button>
            <Button className="text-button">Go to CheckOut</Button>
        </div>
    </div>
}
export default Model;