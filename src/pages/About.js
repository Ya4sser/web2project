// Simple data arrays keep the JSX short and easy to read
const values = [
  { title: "Curated", text: "Every book on our shelf is picked by people who love reading." },
  { title: "Affordable", text: "Fair prices and free shipping on orders over $30." },
  { title: "Fast", text: "Most orders arrive within 48 hours anywhere in Lebanon." },
];

const team = [
  { name: "Yasser", role: "Frontend Developer", initials: "Y" }
];

function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-clay">About us</p>
        <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">
          A small bookstore with a big shelf.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/70">
          Folio started as a student project with a simple idea: buying a book online should
          feel as calm as walking into a good bookshop. No clutter, no endless popups —
          just books, clear prices and quick delivery.
        </p>
      </div>

      {/* Our values */}
      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {values.map((value, index) => (
          <div key={value.title} className="rounded-xl border border-sand bg-white p-6">
            <p className="font-serif text-3xl text-clay">0{index + 1}</p>
            <h2 className="mt-2 text-xl font-semibold">{value.title}</h2>
            <p className="mt-2 text-ink/70">{value.text}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <h2 className="mt-16 font-serif text-3xl font-bold">The team</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 md:max-w-xl">
        {team.map((member) => (
          <div key={member.name} className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ink font-serif text-xl text-white">
              {member.initials}
            </div>
            <div>
              <p className="font-semibold">{member.name}</p>
              <p className="text-sm text-ink/60">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
