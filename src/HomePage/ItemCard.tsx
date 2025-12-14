import Rating from "@mui/material/Rating";
import useItemsStore from "../store";
import type StoreState from "../StoreState";
import { useNavigate } from "react-router-dom";
const ItemCard = ({ props }: any) => {
  const item = props.item;
  const addToCart = props.addToCart;
  const date = props.date;
  const arrivesBeforeChristmas = props.arrivesBeforeChristmas;
  const convertReviews = props.convertReviews;
  const convertTitle = props.convertTitle;
  const cart = useItemsStore((state: StoreState) => state.quantitiesMap);
  const removeItem = useItemsStore((state: StoreState) => state.removeItem);
  const addItem = useItemsStore((state: StoreState) => state.addCount);
  let navigate = useNavigate();

  return (
    <div
      className="relative hover:shadow-lg shadow-gray-500 duration-300 ease-out w-60 h-127 bg-gray-100 rounded-lg overflow-hidden"
      key={item._id}
    >
      <img src={item.image} alt="image" className="w-60 h-70" />
      <div className="p-2">
        <p className="text-md">{convertTitle(item.name)}</p>
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
          <span className="text-lg tracking-wide">
            <span className="text-xs align-text-top">$</span>
            <span className="font-semibold">{item.discountedPrice}</span>
          </span>
        <span className="text-sm text-gray-500 ml-2">
          List:
          <span className="line-through pl-1 tracking-wide">${item.price}</span>
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
      <div className="flex w-full absolute top-109 justify-center">
        {cart.has(item) ? (
          <div className="flex items-center bg-white border border-3 border-yellow-300 w-fit rounded-full ">
            <div className="justify-between flex items-center box-border h-6 w-39 ">
                    <button
                      className="cursor-pointer ml-5"
                      onClick={() => removeItem(item)}
                    >
                      -
                    </button>
                    <span className="text-sm">{cart.get(item)}</span>
                    <button
                      className="cursor-pointer mr-5"
                      onClick={() => addItem(item)}
                    >
                      +
                    </button>
            </div>
          </div>
        ) : (
            <div>
          <button
            className="h-7 w-40 cursor-pointer bg-yellow-300 rounded-full text-sm"
            onClick={(e) => {
              addToCart(item);
              e.preventDefault();
            }}
          >
            Add to cart
          </button>
          </div>
        )}
      </div>
      <div className="absolute bottom-2 w-full flex justify-center">
        <button className=" h-7 w-40 cursor-pointer bg-amber-500 rounded-full text-sm"
          onClick={(e) => {
            addToCart(item);
            e.preventDefault();
            navigate("/cart")
          }
          }>
              Buy now
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
