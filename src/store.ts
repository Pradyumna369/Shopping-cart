import { create } from "zustand";
import { items } from "./Database";
import type Item from "./Item";
import type StoreState from "./StoreState";

const useItemsStore = create<StoreState>((set) => ({
  availableItems: items,
  filteredItems: [] as Array<Item>,
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
      if (count === 1) {
        newMap.delete(item);
        return { quantitiesMap: newMap };
      } else {
        newMap.set(item, count - 1);
        return { quantitiesMap: newMap };
      }
    }),
  setFilteredItems: ({ filter }: any) =>
    set((state: StoreState) => ({
      customerReviews: filter.customerReviews,
      priceLimit: filter.priceLimit,
      category: filter.category,
      deliveryDay: filter.deliveryDay,
      filteredItems: state.availableItems.filter((item: Item) => {
        let meetsCriteria = true;
        if (filter.customerReviews && filter.customerReviews !== "none") {
          meetsCriteria =
            meetsCriteria && item.rating >= Number(filter.customerReviews);
        }
        if (filter.priceLimit && filter.priceLimit !== "none") {
          meetsCriteria =
            meetsCriteria && item.price <= Number(filter.priceLimit);
        }
        if (filter.category && filter.category !== "none") {
          meetsCriteria = meetsCriteria && item.category === filter.category;
        }
        if (filter.deliveryDay && filter.deliveryDay !== "none") {
          const christmas = new Date("2025-12-25");
          const deliverDate = new Date(item.deliverBy);
          meetsCriteria = meetsCriteria && deliverDate < christmas;
        }
        return meetsCriteria;
      }),
    })),
}));

export default useItemsStore;
