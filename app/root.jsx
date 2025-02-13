import { Links, Meta, LiveReload, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import appStylesHref from "./app.css";

export const links = () => [{ rel: "stylesheet", href: appStylesHref }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Nav />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}
