import { about } from "../../data/data";

export default function About(){
  return (
    <>
      <div className="flex flex-col gap-2 mt-10 scroll-mt-14" id="about">
        <h2 className="text-xl font-medium">About</h2>
        <div className="flex gap-2 flex-col">
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