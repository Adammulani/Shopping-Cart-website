import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart]);

  return (
    <div >
      {/**/ }
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mt-2 mb-4 mx-auto flex flex-col md:flex-row justify-center">
          <div className="">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} index={index} />
            ))}
          </div>
{/*font-semibold text-xl text-green-800  */}
          <div className="w-full flex flex-col  mt-5 ">
            <div className="flex flex-col p-5 gap-20 my-14  justify-between">
            <div className="flex flex-col gap-5">
              <div className="font-semibold text-xl text-green-800">Your Cart</div>
              <div className="font-semibold text-5xl text-green-700">Summary</div>
              <p className="text-xl">
                <span className="text-gray-500 font-semibold"> Total items: {cart.length}</span>
              </p>
            </div>

            <div className="flex  flex-col">
              <p className="text-xl font-semibold">Total Amount: ${totalAmount}</p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">Checkout</button>
            </div>
              </div>
          </div>
        </div>
      ) : (
        <div>
          <h2> Cart is Empty </h2>
          <Link to="/">
            <button>
              <p>Shop Now</p>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
