import { create } from "zustand";
import { items } from "./Database";
import type Item from "./Item";
import type StoreState from "./StoreState";

const useItemsStore = create<StoreState>((set) => ({
  availableItems: items,
  quantitiesMap: new Map<Item, number>(),
  customerReviews: "none" as string,
  priceLimit: "none" as string,
  category: "none" as string,
  deliveryDay: "none" as string,
  addCount: (item: Item) =>
    set((state: StoreState) => {
      const newMap = new Map<Item, number>(state.quantitiesMap);
      let count = newMap.get(item);
      if (count === undefined) {
        count = 0;
      }
      newMap.set(item, count + 1);
      return { quantitiesMap: newMap };
    }),
  removeItem: (item: Item) =>
    set((state: StoreState) => {
      const newMap = new Map<Item, number>(state.quantitiesMap);
      let count = newMap.get(item);
      if (count === undefined) {
        return {quantitiesMap: state.quantitiesMap}
      }
      if (count === 1) {
        newMap.delete(item);
        return { quantitiesMap: newMap };
      } else {
        newMap.set(item, count - 1);
        return { quantitiesMap: newMap };
      }
    }),
  setFilter: ({ customerReviews, priceLimit, category, deliveryDay }) =>
    set(() => ({
      customerReviews,
      priceLimit,
      category,
      deliveryDay,
    })),
}));

export default useItemsStore;
