import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-20 bg-ink text-sand">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-bold text-white">
            Folio<span className="text-clay">.</span>
          </p>
          <p className="mt-2 text-sm">Good books, delivered to your door.</p>
        </div>

        <div>
          <p className="mb-2 font-semibold text-white">Explore</p>
          <ul className="space-y-1 text-sm">
            <li><Link to="/books" className="hover:text-white">All books</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/about" className="hover:text-white">About us</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-2 font-semibold text-white">Contact</p>
          <ul className="space-y-1 text-sm">
            <li>Beirut, Lebanon</li>
            <li>hello@folio-books.com</li>
          </ul>
        </div>
      </div>

      <p className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} Folio Bookstore — CSCI426 Project
      </p>
    </footer>
  );
}

export default Footer;
