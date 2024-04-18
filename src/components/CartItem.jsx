import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/MyCartSlice";

const CartItem = ({item,index}) => {

  const dispatch=useDispatch();
  const removeItem=()=>{
       dispatch(remove(item.id))
  }
  return (
    <div>
      <div>
        <div>
          <img src={item.image}></img>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div onClick={removeItem}>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
