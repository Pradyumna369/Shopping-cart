import { Link } from "react-router-dom";
import useItemsStore from "./store.ts";
import type StoreState from "./StoreState.ts";
import type Item from "./Item.ts";

export const Header = () => {
  let count = 0;
  let total = 0;
  const cartItems =
    useItemsStore((state: StoreState) => state.quantitiesMap);
  cartItems.forEach((quantity: number, item: Item) => {
        total += item.discountedPrice * quantity;
        count += quantity;
      });

  return (
    <div className="bg-green-900 flex w-7 items-center p-2 h-15 w-full justify-between">
      <Link to="/" className="text-5xl font-bold flex-none text-white p-2">
        ᵃ⤻ᶻ
      </Link>
      <div className="flex items-center flex-none">
        <div className="pl-2 items-center flex-none">
          <img src="/location.png" alt="Location" className="h-5 w-5" />
        </div>
        <div className="flex-none">
          <p className="text-gray-300 text-xs/2  items-end">
            Deliver to Boston 02125
          </p>
          <p className="text-white font-bold text-sm items-top">
            Update location
          </p>
        </div>
      </div>
      <div className="p-4 shrink flex">
        <input
          type="text"
          className="bg-white shrink w-80 h-9 rounded-l-md px-3"
        />
        <button className="bg-fuchsia-700 h-9 rounded-r-md px-2">
          <img src="/search-icon.png" alt="Search" className="h-5 w-5" />
        </button>
      </div>
      <div className="flex flex-col px-4 pt-2 flex-none">
        <p className="text-white text-xs/1">Hello, User</p>
        <p className="font-bold text-white">Account & Lists</p>
      </div>
      <div className="flex flex-col px-4 pt-2 flex-none">
        <p className="text-white text-xs/1">Returns</p>
        <p className="text-white font-bold">& Orders</p>
      </div>
      <div className="flex flex-col text-center text-white pt-2 w-20">
        <div className="text-xs/2"><p>Total is:</p></div>
        <div className="font-semibold">${total.toFixed(2)}</div>
      </div>
      <div className="relative pr-2 flex">
        {count > 0 ? (
          <div className="">
          <Link to="/cart">
            <img src="/cart-full.png" alt="Cart" className="h-10 w-10" />
            <div className="absolute text-white text-xs text-center  bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">{count}</div>
          </Link>
          </div>
        ) : (
          <div>
          <Link to="/cart">
            <img src="/cart.png" alt="Cart" className="h-10 w-10" />
            <div className="absolute text-white text-xs text-center  bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">0</div>
          </Link>
          </div>
        )}
      </div>
    </div>
  );
};
