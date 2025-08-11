import { about } from "../../data/data";
import Link from "next/link";

export default function AboutLink() {
    return (
        <>
            <div className="p-4">
                <div className="flex flex-col gap-4 mt-5">
                    <h2 className="text-2xl">About</h2>
                    <div className="flex gap-4 flex-col">
                        <p className="text-base">{about.about}</p>
                        <p className="text-base">
                            Feel free to reach out to me{" "}
                            <a
                                href={`mailto:${about.email}`}
                                className="font-bold hover:underline cursor-pointer"
                            >
                                (Email)
                            </a>{" "}
                            if you have any questions or just want to chat.
                        </p>
                    </div>
                    <Link href="/">
                        <h1 className="cursor-pointer text-lg mt-10 font-bold underline">
                            Home Page
                        </h1>
                    </Link>
                </div>
            </div>
        </>
    );
}
