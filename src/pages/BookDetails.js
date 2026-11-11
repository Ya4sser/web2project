import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import books from "../data/books";
import BookCover from "../components/BookCover";
import BookCard from "../components/BookCard";
import { useCart } from "../context/CartContext";

// Dynamic page: the URL /books/3 shows the book with id 3
function BookDetails() {
  const { id } = useParams(); // read the id from the URL
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const book = books.find((b) => b.id === Number(id));

  // If the id doesn't exist, show a friendly message
  if (!book) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="font-serif text-3xl font-bold">Book not found</h1>
        <Link to="/books" className="btn mt-6">Back to books</Link>
      </section>
    );
  }

  // Up to 4 other books from the same category
  const related = books
    .filter((b) => b.category === book.category && b.id !== book.id)
    .slice(0, 4);

  function handleAdd() {
    addToCart(book);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // hide the message after 2 seconds
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <Link to="/books" className="text-sm hover:text-clay">← Back to books</Link>

      <div className="mt-6 grid gap-10 md:grid-cols-[300px_1fr]">
        <div className="mx-auto w-56 md:w-full">
          <BookCover book={book} large />
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-clay">{book.category}</p>
          <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">{book.title}</h1>
          <p className="mt-2 text-lg text-ink/70">by {book.author}</p>

          <p className="mt-6 text-3xl font-semibold">${book.price.toFixed(2)}</p>

          <p className="mt-6 max-w-xl leading-relaxed">{book.description}</p>

          {/* Small info boxes */}
          <div className="mt-6 grid max-w-md grid-cols-3 gap-3 text-center">
            <div className="rounded-lg border border-sand bg-white p-3">
              <p className="text-xs text-ink/60">Year</p>
              <p className="font-semibold">{book.year}</p>
            </div>
            <div className="rounded-lg border border-sand bg-white p-3">
              <p className="text-xs text-ink/60">Pages</p>
              <p className="font-semibold">{book.pages}</p>
            </div>
            <div className="rounded-lg border border-sand bg-white p-3">
              <p className="text-xs text-ink/60">Rating</p>
              <p className="font-semibold">★ {book.rating}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={handleAdd} className="btn">Add to cart</button>
            <Link to="/cart" className="btn-outline">Go to cart</Link>
            {added && <span className="text-sm text-green-700">✓ Added to your cart</span>}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-serif text-2xl font-bold">More in {book.category}</h2>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default BookDetails;
