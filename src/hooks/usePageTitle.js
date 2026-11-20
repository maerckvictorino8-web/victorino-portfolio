import { useEffect } from "react";
import { site } from "../data/site.js";

// Sets the browser tab title for the current page.
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : `${site.name} | Portfolio`;
  }, [title]);
}
