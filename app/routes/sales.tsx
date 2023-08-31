import { Outlet, Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

function SalesNav() {
  return (
    <>
      <Link to="/sales">Overview</Link> {">"}
      <Link to="/sales/invoices">Invoices</Link>
    </>
  )
}
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Sales Page</h1>
      <SalesNav />
      <Outlet />
    </div>
  );
}
