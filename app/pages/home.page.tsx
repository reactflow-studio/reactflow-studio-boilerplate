import Button from "~/components/button.component";
import type { Route } from "./+types/home.page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New ReactFlow Studio App" },
    { name: "description", content: "Welcome to ReactFlow Studio!" },
  ];
}

export default function Home() {
  return <div>
    <p>Hello World</p>
    <Button label="Custom Label" />
  </div>;
}
