import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart, total } = useCart();
  const [ordered, setOrdered] = useState(false);

  // Fake checkout: no payment yet (that comes with the backend phase)
  function handleCheckout() {
    clearCart();
    setOrdered(true);
  }

  if (ordered) {
    return (
      <section className="mx-auto max-w-xl px-4 py-24 text-center">
        <p className="text-5xl">📦</p>
        <h1 className="mt-4 font-serif text-3xl font-bold">Thank you for your order!</h1>
        <p className="mt-2 text-ink/70">Your books are on their way.</p>
        <Link to="/books" className="btn mt-8">Keep browsing</Link>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-serif text-3xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-ink/70">Find something good to read.</p>
        <Link to="/books" className="btn mt-8">Browse books</Link>
      </section>
    );
  }

  const shipping = total >= 30 ? 0 : 4.99; // free shipping over $30

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-serif text-4xl font-bold">Your cart</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px]">
        {/* List of cart items */}
        <ul className="divide-y divide-sand">
          {cart.map((item) => (
            <li key={item.id} className="flex gap-4 py-5">
              {/* Small colored block as a thumbnail (full cover text is too small here) */}
              <div
                className="aspect-[2/3] w-14 shrink-0 rounded-r-md border-l-4 border-black/25 shadow sm:w-16"
                style={{ backgroundColor: item.color }}
              />

              <div className="flex flex-1 flex-col justify-between sm:flex-row sm:items-center">
                <div>
                  <Link to={`/books/${item.id}`} className="font-semibold hover:text-clay">
                    {item.title}
                  </Link>
                  <p className="text-sm text-ink/60">{item.author}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-1 text-sm text-clay hover:underline"
                  >
                    Remove
                  </button>
                </div>

                <div className="mt-3 flex items-center gap-6 sm:mt-0">
                  {/* Quantity controls */}
                  <div className="flex items-center rounded-full border border-sand bg-white">
                    <button className="px-3 py-1" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button className="px-3 py-1" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <p className="w-20 text-right font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Order summary */}
        <aside className="h-fit rounded-xl border border-sand bg-white p-6">
          <h2 className="font-serif text-xl font-bold">Order summary</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
          </div>
          <div className="mt-4 flex justify-between border-t border-sand pt-4 text-lg font-semibold">
            <span>Total</span><span>${(total + shipping).toFixed(2)}</span>
          </div>
          <button onClick={handleCheckout} className="btn mt-6 w-full">Checkout</button>
          {shipping > 0 && (
            <p className="mt-3 text-center text-xs text-ink/60">
              Add ${(30 - total).toFixed(2)} more for free shipping
            </p>
          )}
        </aside>
      </div>
    </section>
  );
}

export default Cart;
