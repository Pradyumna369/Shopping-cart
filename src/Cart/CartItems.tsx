import useItemsStore from "../store.ts";
import type Item from "../Item.ts";
import type StoreState from "../StoreState.ts";

const CartItems = () => {
  const items = useItemsStore((state: StoreState) => state.quantitiesMap);
  const addedItems = [] as Array<Array<any>>;
  const removeItem = useItemsStore((state: StoreState) => state.removeItem);
  const addItem = useItemsStore((state: StoreState) => state.addCount);
  items.forEach((quantity: number, item: Item) =>
    addedItems.push([item, quantity]),
  );
  const date = (date: string) => {
    const deliver = new Date(date).toDateString();
    return (
      deliver.slice(0, 3) +
      ", " +
      deliver.slice(4, 7) +
      " " +
      deliver.slice(8, 10)
    );
  };

  return (
    <div className="pr-5 bg-white rounded-lg min-h-4/5 overflow-y-auto">
      <h1 className="text-3xl font-bold p-4 border-b border-gray-300">
        Shopping Cart
      </h1>
      <div className="p-4">
        {items.size === 0 ? (
          <p className="text-center">Your cart is empty...</p>
        ) : (
          <ul>
            {addedItems.map((item) => (
              <div
                key={item[0]._id}
                className="flex items-center border-b border-gray-300 pb-4 mb-4"
              >
                <img
                  src={item[0].image}
                  alt={item[0].name}
                  className="w-24 h-24 object-contain mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item[0].name}</h2>
                  <p>{item[0].description}</p>
                  <p className="text-sm">
                    FREE delivery <b>{date(item[0].deliverBy)}</b> available at
                    checkout
                  </p>
                  <p className="text-xs text-blue-600 pt-1 pb-1">
                    FREE Returns
                  </p>
                  <div className="flex items-center bg-white border border-3 border-yellow-400 w-fit rounded-full">
                    <button
                      className="h-3 w-4 align-middle justify-center flex items-center rounded-sm mr-3 ml-1 cursor-pointer"
                      onClick={() => removeItem(item[0])}
                    >
                      -
                    </button>
                    <span className="text-sm">{item[1]}</span>
                    <button
                      className="h-3 w-4 align-middle justify-center flex items-center rounded-sm ml-3 mr-1 cursor-pointer"
                      onClick={() => addItem(item[0])}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="w-10 font-bold text-right">
                  ${item[0].price}
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartItems;
