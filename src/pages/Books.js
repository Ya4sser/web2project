import { useState } from "react";
import books, { categories } from "../data/books";
import BookCard from "../components/BookCard";

function Books() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Keep only the books that match the search text AND the chosen category
  const filteredBooks = books.filter((book) => {
    const text = search.toLowerCase();
    const matchesSearch =
      book.title.toLowerCase().includes(text) || book.author.toLowerCase().includes(text);
    const matchesCategory = category === "All" || book.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-serif text-4xl font-bold">Browse books</h1>
      <p className="mt-2 text-ink/70">Search by title or author, or pick a category.</p>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input mt-6 max-w-md"
      />

      {/* Category filter buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              category === cat ? "border-ink bg-ink text-white" : "border-sand hover:border-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-ink/60">{filteredBooks.length} books found</p>

      {/* Book grid: 2 columns on phones, up to 4 on large screens */}
      {filteredBooks.length > 0 ? (
        <div className="mt-4 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-lg">No books match your search.</p>
      )}
    </section>
  );
}

export default Books;
