import type Item from "../Item.ts";
import useItemsStore from "../store.ts";
import ItemCard from "./ItemCard.tsx";
const Items = () => {
  const addCount = useItemsStore((state: any) => state.addCount);
  const addToCart = (item: Item) => addCount(item);
  const items = useItemsStore((state: any) => state.filteredItems);
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
          className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 justify-between"
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
