import type { Route } from "./+types/home.page";
import Button from "~/components/button.component";

// Import rfs data
import page_rfs from "./home.rfs.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: page_rfs.title },
    { name: "description", content: page_rfs.meta.description },
  ];
}

export default function Home() {
  return (
    <div>
      <p>Hello World</p>
      <Button label="Custom Label" />
    </div>
  );
}
