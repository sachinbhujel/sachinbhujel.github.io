import { Dongle } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const dongleFont = Dongle({
    variable: "--font-dongle",
    subsets: ["latin"], // only English
    weight: ["400"], // only regular weight
});

export const metadata = {
    title: "Sachin Bhujel",
    icons: {
        icon: [{ url: "/favicon.ico" }],
    },
    description: "Portfolio Website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu"
                />
                        <script defer src="https://cloud.umami.is/script.js" data-website-id="0b4219ac-7d8a-4f5c-96c7-f3898a4b9bc1"></script>
            </head>
            <body
                className={`${dongleFont.variable} antialiased overflow-auto`}
            >
                <div className="w-[100%] md:w-[700px] m-auto p-1">
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
