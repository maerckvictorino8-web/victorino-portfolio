import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle.js";

export default function NotFound() {
  usePageTitle("Page not found");

  return (
    <section className="max-w-xl py-6">
      <p className="text-neutral-400">404</p>
      <h1 className="heading mt-1">Page not found</h1>
      <Link to="/" className="link mt-6 inline-block">
        Go back to the home page
      </Link>
    </section>
  );
}
