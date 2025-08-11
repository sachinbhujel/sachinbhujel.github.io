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
                <script
                    defer
                    data-website-id="6894d440594ad4c6a4bd72d2"
                    data-domain="sachinbhujel.netlify.app"
                    src="https://datafa.st/js/script.js"
                ></script>
                        <script data-goatcounter="https://sachinbhujel.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
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
