import type {Metadata} from "next";
import '@mantine/core/styles.css';
import {ColorSchemeScript, createTheme, MantineProvider} from '@mantine/core';
import {Inter} from 'next/font/google'
import Header from "@/components/Header";

const inter = Inter({
    subsets: ['latin'], display: 'swap',
})

export const metadata: Metadata = {
    title: "gab", description: "musician and developer",
};

const theme = createTheme({
    primaryColor: "pink", colors: {
        pink: ["#FFF5F9", "#FFE5EC", "#FFCFE0", "#FFB9D3", "#FFA3C7", "#FF8DBA", "#FF77AE", "#FF61A2", "#FF4B96", "#FF358B"],
    },
    fontFamily: inter.style.fontFamily,
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (<html lang="en" className={inter.className}>
    <head>
        <ColorSchemeScript forceColorScheme={"light"} />
    </head>
    <body>
    <MantineProvider
        forceColorScheme={"light"}
        theme={theme}
    >
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
                    backgroundColor: "#FFF5F9",
                }}
            >
                <div style={{width: "100%", height: "100%"}}>
                    {children}
                </div>
            </div>
        </div>
    </MantineProvider>
    </body>
    </html>);
}
