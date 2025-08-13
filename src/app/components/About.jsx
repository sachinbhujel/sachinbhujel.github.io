import { about } from "../../data/data";

export default function About(){
  return (
    <>
      <div className="flex flex-col gap-4 mt-11 scroll-mt-14" id="about">
        <h2 className="text-2xl">About</h2>
        <div className="flex gap-4 flex-col">
          <p className="text-base text-base-content/80">
            {about.about}
          </p>
          <p className="text-base text-base-content/80">
            Feel free to reach out to me{" "}
            <a href={`mailto:${about.email}`} className="font-bold hover:underline cursor-pointer">(Email)</a> if you
            have any questions or just want to chat.
          </p>
        </div>
      </div>
    </>
  )
}