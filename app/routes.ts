
import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

// Read Configuration JSONs (at build time, not runtime)
import routes_rfs from "./routes.rfs.json";
import layouts_rfs from "./layouts/layouts.rfs.json";
 
// Helper to resolve layout file path
function getLayoutFile(layoutName: string) {
  const layout = layouts_rfs.find((l: any) => l.id === layoutName);
  if (!layout) throw new Error(`Layout not found: ${layoutName}`);
  return `layouts/${layout.file}.layout.tsx`;
}

// Group routes by layout
const layoutGroups: Record<string, any[]> = {};
for (const r of routes_rfs) {
  if (!layoutGroups[r.layout]) layoutGroups[r.layout] = [];
  if (r.path === "/") {
    layoutGroups[r.layout].push(index(`pages/${r.page}.page.tsx`));
  } else {
    // Remove leading slash for route segment
    const segment = r.path.startsWith("/") ? r.path.slice(1) : r.path;
    layoutGroups[r.layout].push(route(segment, `pages/${r.page}.page.tsx`));
  }
}

const routes = Object.entries(layoutGroups).map(([layoutName, children]) =>
  layout(getLayoutFile(layoutName), children)
);

export default routes satisfies RouteConfig;
