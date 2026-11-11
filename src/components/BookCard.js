import { Link } from "react-router-dom";
import BookCover from "./BookCover";

// One book in a grid. Clicking it opens the book's details page.
function BookCard({ book }) {
  return (
    <Link to={`/books/${book.id}`} className="group block">
      <div className="transition duration-300 group-hover:-translate-y-1">
        <BookCover book={book} />
      </div>
      <h3 className="mt-3 font-semibold leading-snug group-hover:text-clay">{book.title}</h3>
      <p className="text-sm text-ink/60">{book.author}</p>
      <p className="mt-1 font-semibold">${book.price.toFixed(2)}</p>
    </Link>
  );
}

export default BookCard;
