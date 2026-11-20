import { useState } from "react";
import usePageTitle from "../hooks/usePageTitle.js";
import { site } from "../data/site.js";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  if (!email.trim()) errors.email = "Please enter your email.";
  else if (!emailPattern.test(email)) errors.email = "That email doesn't look right.";
  if (message.trim().length < 10) errors.message = "Please write at least 10 characters.";
  return errors;
}

export default function Contact() {
  usePageTitle("Contact");

  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setSent(false);
    if (Object.keys(found).length > 0) return;

    // No server here, so the form opens the visitor's email app.
    const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputClass =
    "mt-1 w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-white";

  return (
    <section>
      <h1 className="heading">Contact</h1>
      <p className="mt-4 max-w-2xl text-lg text-neutral-300">
        The quickest way to reach me is by email.
      </p>

      <ul className="mt-6 space-y-2 text-neutral-300">
        <li>
          Email: <a className="link break-all" href={`mailto:${site.email}`}>{site.email}</a>
        </li>
      </ul>

      <h2 className="mt-12 text-2xl font-semibold text-white">Send a message</h2>
      <form onSubmit={handleSubmit} noValidate className="mt-6 max-w-xl space-y-5">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass}
          />
          {errors.name && <p id="name-error" className="mt-1 text-sm text-red-300">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
          />
          {errors.email && <p id="email-error" className="mt-1 text-sm text-red-300">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={values.message}
            onChange={handleChange}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={inputClass}
          />
          {errors.message && <p id="message-error" className="mt-1 text-sm text-red-300">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="rounded-md bg-amber-400 px-5 py-2.5 font-medium text-neutral-950 hover:bg-amber-300"
        >
          Send message
        </button>

        <p role="status" className="text-neutral-300">
          {sent && `Your email app should open with the message ready to send. If it doesn't, email me at ${site.email}.`}
        </p>
      </form>
    </section>
  );
}