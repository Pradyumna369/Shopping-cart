import type Item from './Item.ts';
export default interface StoreState {
    availableItems: Item[]
    quantitiesMap: Map<Item, number>
    customerReviews: string
    priceLimit: string
    category: string
    deliveryDay: string
    addCount: (item: Item) => void
    removeItem: (item: Item) => void
    setFilter: (filter: { customerReviews: string; priceLimit: string; category: string; deliveryDay: string }) => void
}