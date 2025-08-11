"use client";
import { projects } from "@/data/data";

export default function ProjectsList() {
    return (
        <div className="flex flex-col gap-4 mt-4">
            {projects.map((item, index) => (
                <a
                    href={item.link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer border-2 border-gray-300 hover:border-black active:border-black rounded-2xl transition-all duration-300"
                >
                    <div className="flex flex-col gap-3 p-4 justify-between">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg">{item.title}</h2>
                            <svg
                                focusable="false"
                                preserveAspectRatio="xMidYMid meet"
                                fill="currentColor"
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                                className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                            </svg>
                        </div>
                        <p className="text-sm text-base-content/80">
                            {item.description}
                        </p>
                        <div className="flex items-center flex-wrap gap-2 mt-2">
                            {item.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="text-sm border rounded-md px-4"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
