import React from "react";
import { blogs } from "../../data/data";

function page() {
    return (
        <>
            <div className="flex flex-col gap-4 mt-11 scroll-mt-11 p-4">
                <h2 className="text-2xl">Blogs</h2>
                    {blogs.map((blog, index) => (
                        <div key={index} className="flex items-center justify-between py-2 gap-8"> 
                            <h2 className="cursor-pointer hover:underline">{blog.title}</h2>
                            <p className="text-sm">{blog.date}</p>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default page;
