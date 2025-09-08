"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [hideOnMobile, setHideOnMobile] = useState(true);
    const pathname = usePathname();
    const blogs = pathname === "/blogs";

    return (
        <>
            <div className="flex justify-center sticky top-2 items-center gap-[25px] w-full z-10">
                <div className="w-[70%] sm:w-[80%] border flex items-center sm:justify-center justify-end bg-gray-10/50 backdrop-blur-sm rounded-4xl py-2 px-4">
                    <div className="flex items-center sm:gap-8 gap-5">
                        <div className="flex items-center gap-4">
                            <ul
                                className={`w-[90%] sm:w-full sm:flex-row flex-col sm:bg-transparent bg-base-200 backdrop-blur-sm sm:static fixed top-12 left-[5%] rounded-2xl sm:border-transparent
                                         border mx-auto items-center text-base sm:p-0 p-2 gap-2 sm:gap-4 ${
                                             hideOnMobile ? "hidden" : "flex"
                                         } sm:flex`}
                            >
                                <li>
                                    <Link
                                        href="/#about"
                                        className="hover:underline"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#projects"
                                        className="hover:underline"
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#experience"
                                        className="hover:underline"
                                    >
                                        Experience
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="hover:underline"
                                    >
                                     Contact
                                    </Link>
                                </li>
                            </ul>

                            <Link
                                href="/blogs"
                                className="hover:underline hidden sm:block"
                            >
                                Blogs
                            </Link>

                            <Link
                                href={blogs ? "/" : "/blogs"}
                                className="hover:underline block sm:hidden"
                            >
                                {blogs ? "Home" : "Blogs"}
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                className="flex sm:hidden"
                                onClick={() => {
                                    setHideOnMobile(!hideOnMobile);
                                }}
                            >
                                <span className="material-symbols-outlined">
                                    menu
                                </span>
                            </button>
                            <button className="flex items-center gap-2">
                                <label className="toggle text-base-content toggle-sm">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => {
                                            const isNight = e.target.checked;
                                            document.documentElement.setAttribute(
                                                "data-theme",
                                                isNight ? "dark" : "light"
                                            );
                                        }}
                                        className="theme-controller"
                                    />

                                    <svg
                                        aria-label="sun"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="4"
                                            ></circle>
                                            <path d="M12 2v2"></path>
                                            <path d="M12 20v2"></path>
                                            <path d="m4.93 4.93 1.41 1.41"></path>
                                            <path d="m17.66 17.66 1.41 1.41"></path>
                                            <path d="M2 12h2"></path>
                                            <path d="M20 12h2"></path>
                                            <path d="m6.34 17.66-1.41 1.41"></path>
                                            <path d="m19.07 4.93-1.41 1.41"></path>
                                        </g>
                                    </svg>

                                    <svg
                                        aria-label="moon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                        </g>
                                    </svg>
                                </label>
                                <a href="https://github.com/sachinbhujel/NextJS-Portfolio-Template" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github cursor-pointer"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
