import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./cartSlice";

export default function CartList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);

  function handleRemoveFromCart(result) {
    dispatch(removeFromCart(result));
  }
  return (
    <>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((result) => (
            <li key={result.id}>
              {result.name}
              <button onClick={() => handleRemoveFromCart(result)}>
                Remove from cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
