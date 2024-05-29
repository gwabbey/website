// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import React from "react";
import { Header } from "~/routes/components/Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript forceColorScheme={"light"} />
      </head>
      <body
        style={{
          backgroundColor: "#FFF5F9",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <MantineProvider
          forceColorScheme={"light"}
          theme={{
            primaryColor: "pink",
            colors: {
              pink: [
                "#FFF5F9",
                "#FFE5EC",
                "#FFCFE0",
                "#FFB9D3",
                "#FFA3C7",
                "#FF8DBA",
                "#FF77AE",
                "#FF61A2",
                "#FF4B96",
                "#FF358B",
              ],
            },
          }}
        >
          {children}
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Header />
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
