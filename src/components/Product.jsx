import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/Slices/MyCartSlice";
import toast from "react-hot-toast";
const Product = ({post}) => {
  
  const {cart}=useSelector((state)=>state);
  const dispatch=useDispatch();

  const removeItem=()=>{
    dispatch(remove(post.id));
    toast.error("Item removed from cart")
  }

  const addItem=()=>{
    dispatch(add(post));
    toast.success("Item added to cart")
  }
  return (
    <div className="flex flex-col items-center justify-between
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline ">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full"></img>
      </div>
      <div className="flex justify-between gap-12">
      <div>
        <p className="text-green-600 font-semibold">${post.price}</p>
      </div>
      <button>
        {   //checking whether cart contains this current item or not
        // in cart there exist some item x with id x.id that is compared with post.id i.e current item
           cart.some((x)=>x.id===post.id)?
           (<button onClick={removeItem}
           className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
            hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
            Remove Item
           </button>):
           (
            <button onClick={addItem}
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
            hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
              Add Item
            </button>
           )
        }
      </button>
      </div>
      
    </div>
  );
};

export default Product;
