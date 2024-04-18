import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/MyCartSlice";
import toast from "react-hot-toast";

const CartItem = ({item,index}) => {

  const dispatch=useDispatch();
  const removeItem=()=>{
       dispatch(remove(item.id))
       toast.success("Item removed from cart")
  }
  return (
    <div >
        <div className=" max-h-[400px] flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500 mt-2 mb-2 md:mx-5">
         
         <div  className="">
     
         
          <img className="w-[400px] h-[400px] object-cover  object-scale-down" src={item.image}></img>
        </div>
        <div className="md:ml-10 self-start space-y-5 w-full ">
          {/*flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center */}
          <p className="text-gray-700 font-semibold">{item.title}</p>
          <p className=" text-gray-500 font-normal text-sm ">{item.description}</p>
          <div className="flex  justify-between items-center w-11/12">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div onClick={removeItem}>
              <FcDeleteDatabase className="text-[35px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
