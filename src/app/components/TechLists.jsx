import Marquee from "../components/Marqee";
import { skills } from "@/data/data";

export default function TechLists() {
    return (
        <div className="mt-11">
             <h2 className="text-2xl">Tech Stack</h2>
            <Marquee duration="10s">
                <div className="flex gap-8 mt-4">
                    {[...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2 w-[80px] p-2"
                        >
                            <div className="border p-2 border-gray-400 shadow-md rounded-sm dark:bg-white">
                                <img
                                    src={`${skill.icon}`}
                                    className="w-10 h-10"
                                    alt={`${skill.alt}`}
                                />
                            </div>
                            <span className="text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
}
