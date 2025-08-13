"use client";

import React, { useEffect, useState } from "react";
import { blogs } from "../../data/data";
import Link from "next/link";

function page() {
    return (
        <>
            <div className="not-prose flex flex-col gap-4 p-4">
                <h2 className="text-2xl font-semibold">Blogs</h2>
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
                                <p className="text-sm">{blog.date}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center mt-10">No blogs available.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default page;
