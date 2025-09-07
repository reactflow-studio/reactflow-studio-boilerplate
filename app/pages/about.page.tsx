import type { Route } from "./+types/about.page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | New ReactFlow Studio App" },
    { name: "description", content: "About Page of New ReactFlow Studio!" },
  ];
}

export default function About() {
  return <>
    <p>About Us</p>
  </>;
}
