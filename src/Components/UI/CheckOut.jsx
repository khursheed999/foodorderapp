import { useContext, useState } from "react";
import Button from "./Button";
import CartContext from "../../Store/CartContext";

function CheckOut() {
    const initailValue={
       name:'',
       email:'',
       street:'',
       postalcode:'',
       city:'',
    }
    const [inputFormData,setInputFormData]=useState(initailValue);
    const { setCheckOutPOpUp,items } = useContext(CartContext);

    function handleForm(event) {
         event.preventDefault();
        //  const fd=new FormData(event.target);
        //  const customerData=Object.fromEntries(fd.entries());
        //  setInputFormData(customerData)
        const {name, value}=event.target;
        setInputFormData({
            ...inputFormData,
            [name]:value,
        })
        
     
    }
   async function handleFormSubmit(e){
        e.preventDefault();
        try{
          const res=await fetch('http://localhost:3000/orders',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                   order:{
                    items,
                    customer:inputFormData,
                   },
                   
            }),
          });
          const data=await res.json();
          if(!res.ok){
            throw new Error('Failed to upload the details of the user');
          }
          console.log(data.message);
          setCheckOutPOpUp(false);

        }
        catch(err){
            console.error(('error', err));

        }

        
        

    }
    return <div className="checkOut-modal">
        <h3>CheckOut</h3>
        <p>Total Amount $344.55</p>
        <form className="control" onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="Name">Full Name</label> <br/>
                <input type="text"
                 name="name"
                 value={inputFormData.value}
                  placeholder="Enter Name" 
                  onChange={handleForm}
                  required
                  minLength={8}
                  />
            </div>

            <div>
                <label htmlFor="E-Mail Address">E-Mail Address</label><br/>
                <input type="email" 
                name="email"
                value={inputFormData.value}
                onChange={handleForm}
                required
                 placeholder="Enter E-Mail" />
            </div>
            <div>

                <label htmlFor="street">Street</label><br/>
                <input type="text"
                 name="street" 
                 value={inputFormData.value}
                 required
                 onChange={handleForm}
                 placeholder="enter Street" />
            </div>
            <div className="control-row">

                <label htmlFor="postalcode">Postal Code</label>
                <input type="number" 
                name="postalcode" 
                onChange={handleForm}
                value={inputFormData.value}
                required
                min={6}
               
                placeholder="enter postal code" />
                <br/>
                <label htmlFor="city">City</label>
                <input type="text" 
                name="city" 
                onChange={handleForm}
                value={inputFormData.value}
                required
                placeholder="enter City Name" />
                <br/>
            </div>
             <div className="control-section">
             <Button className="text-button" onClick={() => setCheckOutPOpUp(false)}>close</Button>
              <Button type='submit' className='button'>Submit Order</Button>
             </div>
        </form>
    </div>
}
export default CheckOut;