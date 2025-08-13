import { experience } from "../../data/data";

export default function Experience() {
    return (
        <>
            <div className="mt-11 scroll-mt-14" id="experience">
                <h2 className="text-2xl">Work Experience</h2>
                <div className="mt-6">
                    <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-500 mt-4 p-2">
                        {experience.map((item, index) => (
                            <li
                                key={index}
                                className="relative -ms-1.5 flex items-start gap-4"
                            >
                                <span className="size-3 shrink-0 rounded-full bg-black dark:bg-white"></span>

                                <div className="-mt-2">
                                    <time className="text-xs/none font-medium">
                                        {item.date}
                                    </time>

                                    <h3 className="text-lg font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-0.5 text-sm text-base-content/80">
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
}
