import useItemsStore from "../store";
import type Item from "../Item";

const TotalPanel = () => {
  const cartItems = useItemsStore((state: any) => state.quantitiesMap);
  let total = 0;
  let count = 0;
  cartItems.forEach((quantity: number, item: Item) => {
    total += item.price * quantity;
    count += quantity;
  });
  console.log("cart items", cartItems);
  console.log("Total is", total);
  const freeDelivery = total >= 50;
  return (
    <div className="w-60 bg-white h-1/2 p-4 b-10 border rounded-lg border-gray-300">
      <div className="flex justify-between mb-4">
        <div className="text-sm">
          {freeDelivery ? (
            <div>
              <span className="text-green-800">
                Your order qualify for FREE delivery!
              </span>
            </div>
          ) : (
            <div className="text-gray-900">
              Add{" "}
              <span className="text-red-700">${(50 - total).toFixed(2)}</span>{" "}
              more to get FREE Delivery.
            </div>
          )}
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Subtotal ({count} items):</span>
        <span className="font-bold">${total.toFixed(2)}</span>
      </div>

      <hr className="mb-4" />
      <div className="flex justify-between mb-4">
        <span className="text-xl font-bold">Total:</span>
        <span className="text-xl font-bold">${total.toFixed(2)}</span>
      </div>
      <button className="w-full cursor-pointer bg-yellow-300 text-black py-2 rounded-full hover:bg-yellow-400 active:bg-yellow-400 text-sm">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default TotalPanel;
