import type { Route } from "./+types/about.page";

// Import rfs data
import page_rfs from "./about.rfs.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: page_rfs.title },
    { name: "description", content: page_rfs.meta.description },
  ];
}
export default function About() {
  return (
    <>
      <p>About Us</p>
    </>
  );
}
