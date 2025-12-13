import { useState } from "react";
import useItemsStore from "../store.ts";
import type StoreState from "../StoreState.ts";
const FilterPanel = () => {
  const [customerReviews, setCustomerReviews] = useState<string | null>(null);
  const [priceLimit, setPriceLimit] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [deliveryDay, setDeliveryDay] = useState<string | null>(null);
  const filter = {
    customerReviews: customerReviews ? customerReviews : "none",
    priceLimit: priceLimit ? priceLimit : "none",
    category: category ? category : "none",
    deliveryDay: deliveryDay ? deliveryDay : "none",
  };
  const setFilteredItems = useItemsStore(
    (state: StoreState) => state.setFilteredItems,
  );
  
  setFilteredItems({ filter });
  return (
    <form className="w-60 h-screen p-4 border-r border-gray-300 sticky top-0">
      <div className="font-bold text-xl">Shop all</div>
      <div className="text-sm">
        <fieldset>
          <legend className="font-bold pt-2">Shop by category</legend>
          <div className="pt-1">
            <input
              type="radio"
              id="All Category"
              name="category"
              value="none"
              onChange={(e) => setCategory(e.target.value)}
              defaultChecked
            />
            <label className="pl-2" htmlFor="All Category">
              All
            </label>
          </div>
          <div className="pt-1">
            <input
              type="radio"
              id="Electronics"
              name="category"
              value="Electronics"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label className="pl-2" htmlFor="Electronics">
              Electronics
            </label>
          </div>
          <div className="pt-1">
            <input
              type="radio"
              id="Home Appliances"
              name="category"
              value="Home Appliances"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label className="pl-2" htmlFor="Home Appliances">
              Home Appliances
            </label>
          </div>
          <div className="pt-1">
            <input
              type="radio"
              id="Fashion"
              name="category"
              value="Fashion"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label className="pl-2" htmlFor="Fashion">
              Fashion
            </label>
          </div>
          <div className="pt-1">
            <input
              type="radio"
              id="Furniture"
              name="category"
              value="Furniture"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label className="pl-2" htmlFor="Furniture">
              Furniture
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-bold pt-2">Price</legend>
          <div className="pt-1">
            <input
              type="radio"
              id="All Prices"
              name="price"
              value="none"
              onChange={(e) => setPriceLimit(e.target.value)}
              defaultChecked
            />
            <label className="pl-2" htmlFor="All Prices">
              All
            </label>
          </div>
          <div className="pt-1">
            <input
              type="radio"
              id="Under50"
              name="price"
              value="50"
              onChange={(e) => setPriceLimit(e.target.value)}
            />
            <label className="pl-2" htmlFor="Under50">
              Under $50
            </label>
          </div>
          <div className="pt-1">
            <input
              type="radio"
              id="Under100"
              name="price"
              value="100"
              onChange={(e) => setPriceLimit(e.target.value)}
            />
            <label className="pl-2" htmlFor="Under100">
              Under $100
            </label>
          </div>
          <div className="pt-1">
            <input
              type="radio"
              id="Under500"
              name="price"
              value="500"
              onChange={(e) => setPriceLimit(e.target.value)}
            />
            <label className="pl-2" htmlFor="Under500">
              Under $500
            </label>
          </div>
          <div className="pt-1">
            <input
              type="radio"
              id="Under1000"
              name="price"
              value="1000"
              onChange={(e) => setPriceLimit(e.target.value)}
            />
            <label className="pl-2" htmlFor="Under1000">
              Under $1000
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-bold pt-2">Customer reviews</legend>
          <div className="pt-1">
            <input
              type="radio"
              id="All Reviews"
              name="reviews"
              value="none"
              onChange={(e) => setCustomerReviews(e.target.value)}
              defaultChecked
            />
            <label className="pl-2" htmlFor="All Reviews">
              All
            </label>
          </div>
          <div className="pt-1">
            <input
              type="radio"
              id="4stars"
              name="reviews"
              value="4"
              onChange={(e) => setCustomerReviews(e.target.value)}
            />
            <label className="pl-2" htmlFor="4stars">
              4 stars & up
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-bold pt-2">Delivery day</legend>
          <div className="pt-1">
            <input
              type="radio"
              id="All Days"
              name="delivery"
              value="none"
              onChange={(e) => setDeliveryDay(e.target.value)}
              defaultChecked
            />
            <label className="pl-2" htmlFor="All Days">
              All
            </label>
          </div>
          <div className="pt-1">
            <input
              type="radio"
              id="christmas"
              name="delivery"
              value="christmas"
              onChange={(e) => setDeliveryDay(e.target.value)}
            />
            <label className="pl-2" htmlFor="christmas">
              Get it by Christmas
            </label>
          </div>
        </fieldset>
      </div>
    </form>
  );
};

export default FilterPanel;
