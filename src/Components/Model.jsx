import Button from "./UI/Button";
import Cart from "./UI/Cart";
import { useContext,useState } from "react";
import CartContext from "../Store/CartContext";
import CheckOut from "./UI/CheckOut";
const Model = () => {
    const [showCOut,setShowCOut]=useState(false);
    const { setModelPopUp, checkOUtPopUp, setCheckOutPOpUp, modelPopUp, items } = useContext(CartContext);
    const totalAmount = items.reduce((acc, item) => acc += item.quantity * item.price, 0).toFixed(2);
    function handleCheckOut() {
        setModelPopUp(false);
        setShowCOut(true);
        setCheckOutPOpUp(true);
        console.log(showCOut+'  '+modelPopUp);
        // setCheckOutPOpUp(true);
        // setModelPopUp(false);
        // handleClose();
        // setCheckOutPOpUp(true);
        // console.log("clicked");
        // console.log(checkOUtPopUp);
    }
    function handleClose() {
        setModelPopUp(false);
        setCheckOutPOpUp(false);
    }


    return <div className="modal">
        <Cart />
        <div className="cart-total">
            total=${totalAmount}

        </div>
        <div className="modal-actions">
       

            <Button className="text-button" onClick={handleClose}>Close</Button>
            <button className="text-button" onClick={handleCheckOut}>Go to CheckOut</button>
        </div>
       
    </div>
}
export default Model;