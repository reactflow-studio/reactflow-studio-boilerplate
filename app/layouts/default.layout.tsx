import { Link, Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <div>
      <h1>Default Layout</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}
