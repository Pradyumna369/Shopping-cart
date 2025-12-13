import type Item from './Item.ts';
export default interface StoreState {
    availableItems: Item[]
    filteredItems: Item[]
    quantitiesMap: Map<Item, number>
    customerReviews: string
    priceLimit: string
    category: string
    deliveryDay: string
    addCount: (item: Item) => void
    removeItem: (item: Item) => void
    setFilteredItems: ({ filter }: any) => void
}