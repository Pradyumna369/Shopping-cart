import Rating from "@mui/material/Rating";
import useItemsStore from "../store";
import type StoreState from "../StoreState";
const ItemCard = ({ props }: any) => {
  const item = props.item;
  const addToCart = props.addToCart;
  const date = props.date;
  const arrivesBeforeChristmas = props.arrivesBeforeChristmas;
  const convertReviews = props.convertReviews;
  const convertTitle = props.convertTitle;
  const cart = useItemsStore((state: StoreState) => state.quantitiesMap);
  return (
    <div
      className="relative group w-60 h-110 bg-gray-100 rounded-lg"
      key={item._id}
    >
      <img src={item.image} alt="image" className="w-60 h-70" />
      <div className="p-2">
        <p className="text-md font-semibold">{convertTitle(item.name)}</p>
        <div className="flex items-center">
          <div className="text-sm">{Number(item.rating).toFixed(1)}</div>
          <Rating
            className="pl-1 mb-1"
            name="half-rating-read"
            defaultValue={item.rating}
            precision={0.5}
            readOnly
          />
          <div className="text-xs pl-1 text-blue-900">
            ({convertReviews(item.reviews)})
          </div>
        </div>
        <span className="text-lg font-bold">${item.discountedPrice}</span>
        <span className="text-sm text-gray-500 ml-2">
          List:
          <span className="line-through pl-1">${item.price}</span>
        </span>
        <p className="text-sm">
          FREE delivery <b>{date(item.deliverBy)}</b>
        </p>
        <p className="text-sm">
          Or fastest delivery <b>{date(item.fastDelivery)}</b>
        </p>
        {arrivesBeforeChristmas(item.deliverBy) ? (
          <p className="text-green-700 text-sm font-semibold">
            Arrives before Christmas
          </p>
        ) : null}
      </div>
      <div className="flex absolute bottom-2 right-2 items-center justify-center">
        {cart.has(item) ? (
          <div className="text-sm h-5 w-5">
            <img src="/bag.png" alt="Cart" className="h-5 w-6" />
          </div>
        ) : (
          <button
            className="h-7 w-7 cursor-pointer bg-gray-400 rounded-xs invisible group-hover:visible group-focus:visible active:bg-gray-500"
            onClick={(e) => {
              addToCart(item);
              e.preventDefault();
            }}
          >
            <img src="/bag.png" alt="Cart" className="h-5 w-6 pl-1" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
