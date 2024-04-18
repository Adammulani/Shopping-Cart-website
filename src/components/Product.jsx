import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/Slices/MyCartSlice";
import toast from "react-hot-toast";
const Product = ({post}) => {
  
  const {cart}=useSelector((state)=>state);
  const dispatch=useDispatch();

  const removeItem=()=>{
    dispatch(remove(post.id));
   // toast.success("Item removed from cart")
  }

  const addItem=()=>{
    dispatch(add(post));
    //toast.success("Item added to cart")
  }
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image}></img>
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <button>
        {   //checking whether cart contains this current item or not
        // in cart there exist some item x with id x.id that is compared with post.id i.e current item
           cart.some((x)=>x.id===post.id)?
           (<button onClick={removeItem}>
            Remove Item
           </button>):
           (
            <button onClick={addItem}>
              Add Item
            </button>
           )
        }
      </button>
    </div>
  );
};

export default Product;
