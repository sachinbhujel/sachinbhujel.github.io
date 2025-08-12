import React from "react";
import { blogs } from "../../data/data";

function page() {
    return (
        <>
            <div className="not-prose flex flex-col gap-4 p-4">
                <h2 className="text-2xl font-semibold">Blogs</h2>
                <div className="flex flex-col gap-5 p-1">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between gap-5"
                        >
                            <h2 className="cursor-pointer hover:underline">
                                {blog.title}
                            </h2>
                            <p className="text-sm">{blog.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default page;
