import CartItems from "./CartItems";
import { Header } from "../Header";
import TotalPanel from "./TotalPanel";
const Cart = () => {
  return (
    <div className="bg-gray-100 h-full">
      <Header />
      <div className="flex justify-between p-4">
        <div className="w-full">
          <CartItems />
        </div>
        <div className="ml-5 h-screen sticky top-5">
          <TotalPanel />
        </div>
      </div>
    </div>
  );
};

export default Cart;
