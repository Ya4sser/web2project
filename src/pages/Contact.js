import { useState } from "react";

function Contact() {
  // One state object holds all the form fields
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  // Update the field that changed, using its "name" attribute
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Check the form and return any errors
  function validate() {
    const newErrors = {};
    if (form.name.trim() === "") newErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters.";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-12 md:grid-cols-2">
      <div>
        <p className="text-sm uppercase tracking-widest text-clay">Contact</p>
        <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Get in touch</h1>
        <p className="mt-4 text-lg text-ink/70">
          Questions about an order, or looking for a book recommendation? Send us a message.
        </p>

        <ul className="mt-8 space-y-4">
          <li><span className="font-semibold">Address:</span> Hamra Street, Beirut, Lebanon</li>
          <li><span className="font-semibold">Email:</span> hello@folio-books.com</li>
          <li><span className="font-semibold">Phone:</span> +961 1 234 567</li>
          <li><span className="font-semibold">Hours:</span> Mon – Sat, 9am – 7pm</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="rounded-2xl border border-sand bg-white p-6 sm:p-8" noValidate>
        {sent && (
          <p className="mb-4 rounded-lg bg-green-50 p-3 text-green-800">
            Thanks! Your message was sent. We'll reply soon.
          </p>
        )}

        <label className="block text-sm font-medium" htmlFor="name">Name</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} className="input mt-1" />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}

        <label className="mt-4 block text-sm font-medium" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className="input mt-1" />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}

        <label className="mt-4 block text-sm font-medium" htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} className="input mt-1" />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}

        <button type="submit" className="btn mt-6 w-full">Send message</button>
      </form>
    </section>
  );
}

export default Contact;
