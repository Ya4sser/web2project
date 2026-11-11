import { Link } from "react-router-dom";

const services = [
  { icon: "🔍", title: "Smart search", text: "Find any book by its title or author in seconds." },
  { icon: "🗂️", title: "Categories", text: "Browse by genre: mystery, romance, sci-fi and more." },
  { icon: "🛒", title: "Easy cart", text: "Add books, change quantities and see your total instantly." },
  { icon: "🚚", title: "Fast delivery", text: "Orders arrive within 48 hours. Free over $30." },
  { icon: "🎁", title: "Gift wrapping", text: "Send a book as a gift with a handwritten note." },
  { icon: "💬", title: "Reading advice", text: "Not sure what to read next? Ask us and we'll suggest." },
];

// Steps showing how ordering works
const steps = ["Browse or search", "Add to cart", "Checkout", "Enjoy reading"];

function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-sm uppercase tracking-widest text-clay">Services</p>
      <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">What we offer</h1>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-sand bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-3xl">{service.icon}</p>
            <h2 className="mt-3 text-xl font-semibold">{service.title}</h2>
            <p className="mt-2 text-ink/70">{service.text}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-serif text-3xl font-bold">How it works</h2>
      <ol className="mt-6 grid gap-4 sm:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-3 rounded-xl bg-ink p-5 text-white">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-clay font-bold">
              {index + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <div className="mt-12 text-center">
        <Link to="/books" className="btn">Start browsing</Link>
      </div>
    </section>
  );
}

export default Services;
