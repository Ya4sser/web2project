import { Link } from "react-router-dom";

// Shown when the URL doesn't match any page
function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="font-serif text-7xl font-bold text-clay">404</p>
      <h1 className="mt-4 font-serif text-3xl font-bold">This page is missing from our shelf</h1>
      <Link to="/" className="btn mt-8">Go home</Link>
    </section>
  );
}

export default NotFound;
