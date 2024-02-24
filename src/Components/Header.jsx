import { useContext } from 'react';
import LogoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../Store/CartContext';
import Model from './Model';
import CheckOut from './UI/CheckOut';

export default function Header(){
      const { items,checkOUtPopUp, modelPopUp,setModelPopUp}= useContext(CartContext);
      
      const totalItems=items.reduce((totalNOItems,item)=>totalNOItems+=item.quantity ,0);
    function handleModel(){
        setModelPopUp(true);
       
        
    }
    return <header id="main-header">
        <div id="title">
            <img src={LogoImg} alt="A restaurant" />
            <h1>
                ReactFood
            </h1>
        </div>
        <nav>
            <Button textOnly onClick={handleModel}>Cart ({totalItems})</Button>
            {totalItems>0&& (modelPopUp&& <div className='modal-wrapper'><Model/></div>)}
            {checkOUtPopUp&&<CheckOut/>}
        </nav>
       
    </header>
}