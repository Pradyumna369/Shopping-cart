import type Item from "../Item.ts";
import useItemsStore from "../store.ts";
import ItemCard from "./ItemCard.tsx";
import type StoreState from "../StoreState.ts";
const Items = () => {
  const addCount = useItemsStore((state: StoreState) => state.addCount);
  const addToCart = (item: Item) => addCount(item);
  const availableItems = useItemsStore((state: StoreState) => state.availableItems);
  const customerReviews = useItemsStore((state: StoreState) => state.customerReviews);
  const priceLimit = useItemsStore((state: StoreState) => state.priceLimit);
  const category = useItemsStore((state: StoreState) => state.category);
  const deliveryDay = useItemsStore((state: StoreState) => state.deliveryDay);
  const items =  availableItems.filter((item: Item) => {
      let meetsCriteria = true;
      if (customerReviews && customerReviews !== "none") {
        meetsCriteria = meetsCriteria && item.rating >= Number(customerReviews);
      }
      if (priceLimit && priceLimit !== "none") {
        meetsCriteria = meetsCriteria && item.price <= Number(priceLimit);
      }
      if (category && category !== "none") {
        meetsCriteria = meetsCriteria && item.category === category;
      }
      if (deliveryDay && deliveryDay !== "none") {
        const christmas = new Date("2025-12-25");
        const deliverDate = new Date(item.deliverBy);
        meetsCriteria = meetsCriteria && deliverDate < christmas;
      }
      return meetsCriteria;
    });
  
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
  const arrivesBeforeChristmas = (date: string) => {
    const deliver = new Date(date);
    const christmas = new Date("2025-12-25");
    return deliver <= christmas;
  };
  const convertReviews = (reviews: number) => {
    if (reviews < 1000) return reviews;
    return Number(reviews / 1000).toFixed(1) + "K";
  };
  const convertTitle = (title: string) => {
    if (title.length > 24) {
      return title.slice(0, 24) + "...";
    }
    return title;
  };

  return (
    <>
      {items.length > 0 ? (
        <div
          id="items"
          className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-4 p-4 w-full"
        >
          {items.map((item: Item) => (
            <ItemCard
              props={{
                item,
                addToCart,
                date,
                arrivesBeforeChristmas,
                convertReviews,
                convertTitle,
              }}
              key={item._id}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-xl font-semibold p-4">
          No items match the selected filters...
        </div>
      )}
    </>
  );
};

export default Items;
