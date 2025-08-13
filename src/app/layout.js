import "./globals.css";
import Navbar from "./components/Navbar";
import { about } from "@/data/data";

export const metadata = {
    title: `Hi there👋 | ${about.name} | ${about.role}`,
    icons: {
        icon: [{ url: "/favicon.ico" }],
    },
    description: `${about.about}`,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light" data-scroll-behavior="smooth">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap"
                    rel="stylesheet"
                ></link>
            </head>
            <body
                className={`antialiased overflow-auto`}
            >
                <div className="w-[100%] md:w-[700px] m-auto p-1">
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
