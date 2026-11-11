// Draws a simple book cover with CSS instead of using images.
// Each book has its own "color" in the data file.
function BookCover({ book, large = false }) {
  return (
    <div
      className={`relative flex aspect-[2/3] flex-col justify-between overflow-hidden rounded-r-md rounded-l-sm p-4 text-white shadow-lg ${
        large ? "p-8" : ""
      }`}
      style={{ backgroundColor: book.color }}
    >
      {/* Dark strip on the left to look like the book's spine */}
      <div className="absolute inset-y-0 left-0 w-2 bg-black/25" />

      <p className="text-[10px] uppercase tracking-widest opacity-80">{book.category}</p>

      <div>
        <h3 className={`font-serif font-bold leading-tight ${large ? "text-3xl" : "text-lg"}`}>
          {book.title}
        </h3>
        <div className="my-2 h-px w-10 bg-white/60" />
        <p className={large ? "text-base" : "text-xs"}>{book.author}</p>
      </div>
    </div>
  );
}

export default BookCover;
