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
                    <div className="flex items-center sm:gap-8 gap-4">
                        <div className="flex items-center gap-4">
                            <ul
                                className={`w-[90%] sm:w-full sm:flex-row flex-col sm:bg-transparent bg-base-200 backdrop-blur-sm sm:static fixed top-12 left-[5%] rounded-2xl sm:border-transparent
                                         border mx-auto items-center text-base sm:p-0 p-2 gap-2 sm:gap-4 ${
                                             hideOnMobile ? "hidden" : "flex"
                                         } sm:flex`}
                            >
                                <li>
                                    <a
                                        href="/#about"
                                        className="hover:underline"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/#projects"
                                        className="hover:underline"
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/#experience"
                                        className="hover:underline"
                                    >
                                        Experience
                                    </a>
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
                            <button className="flex">
                                <input
                                    type="checkbox"
                                    className="toggle theme-controller toggle-sm"
                                    onChange={(e) => {
                                        const isNight = e.target.checked;
                                        document.documentElement.setAttribute(
                                            "data-theme",
                                            isNight ? "dark" : "light"
                                        );
                                    }}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
