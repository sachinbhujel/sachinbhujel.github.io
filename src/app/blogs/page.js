"use client";

import React, { useEffect, useState } from "react";
import { blogs } from "../../data/data";
import Link from "next/link";

function page() {
    return (
        <div className="md:w-[700px] w-[100%] mt-5 p-4">
            <main className="flex flex-col gap-4">
                <h1 className="text-xl font-medium before:content-['>'] before:mr-1">Blogs</h1>
                <div className="flex flex-col gap-5 p-1">
                    {blogs.length > 0 ? (
                        blogs.map((blog, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between gap-5"
                            >
                                <Link href={blog.link}>
                                    <h2 className="cursor-pointer hover:underline">
                                        {blog.title}
                                    </h2>
                                </Link>
                                <p className="text-xs">{blog.date}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center mt-10">No blogs available.</p>
                    )}
                </div>
            </main>
        </div>
    );
}

export default page;
