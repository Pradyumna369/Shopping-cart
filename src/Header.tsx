import React from "react";
import { Link } from "react-router-dom";
import useItemsStore from "./store.ts";

export const Header = () => {
  const cartNotEmpty =
    useItemsStore((state: any) => state.quantitiesMap).size > 0;
  return (
    <div className="bg-green-900 flex items-center p-2 h-15 w-full justify-between">
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
      <div className="pb-2 pr-4 flex-none">
        {cartNotEmpty ? (
          <Link to="/cart">
            <img src="/cart-full.png" alt="Cart" className="h-8 w-8" />
          </Link>
        ) : (
          <Link to="/cart">
            <img src="/cart.png" alt="Cart" className="h-8 w-8" />
          </Link>
        )}
      </div>
    </div>
  );
};
