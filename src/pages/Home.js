import { Link } from "react-router-dom";
import books from "../data/books";
import BookCover from "../components/BookCover";
import BookCard from "../components/BookCard";

function Home() {
  // Show the 4 highest-rated books as "featured"
  const featured = [...books].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <>
      {/* Hero section */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm uppercase tracking-widest text-clay">Online bookstore</p>
          <h1 className="mt-3 font-serif text-5xl font-bold leading-tight md:text-6xl">
            Find your next favorite book.
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink/70">
            Browse timeless classics, search by title or author, and order in a few clicks.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/books" className="btn">Browse books</Link>
            <Link to="/about" className="btn-outline">Learn more</Link>
          </div>
        </div>

        {/* Three book covers stacked like a small display */}
        <div className="relative mx-auto h-80 w-72 sm:h-96 sm:w-80">
          <div className="absolute left-0 top-8 w-40 -rotate-6 sm:w-44">
            <BookCover book={books[1]} />
          </div>
          <div className="absolute right-0 top-8 w-40 rotate-6 sm:w-44">
            <BookCover book={books[4]} />
          </div>
          <div className="absolute left-1/2 top-0 w-40 -translate-x-1/2 sm:w-44">
            <BookCover book={books[0]} />
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-y border-sand bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-3 px-4 py-8 text-center">
          <div>
            <p className="font-serif text-3xl font-bold">{books.length}+</p>
            <p className="text-sm text-ink/60">Books</p>
          </div>
          <div>
            <p className="font-serif text-3xl font-bold">48h</p>
            <p className="text-sm text-ink/60">Delivery</p>
          </div>
          <div>
            <p className="font-serif text-3xl font-bold">$30</p>
            <p className="text-sm text-ink/60">Free shipping from</p>
          </div>
        </div>
      </section>

      {/* Featured books */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl font-bold">Top rated</h2>
          <Link to="/books" className="text-sm font-medium hover:text-clay">View all →</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="mx-4">
        <div className="mx-auto max-w-6xl rounded-2xl bg-ink px-6 py-12 text-center text-white">
          <h2 className="font-serif text-3xl font-bold">Not sure what to read?</h2>
          <p className="mt-2 text-sand">Tell us what you like and we'll suggest something.</p>
          <Link to="/contact" className="btn mt-6">Ask us</Link>
        </div>
      </section>
    </>
  );
}

export default Home;
