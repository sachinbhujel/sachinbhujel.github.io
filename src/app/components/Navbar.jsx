"use client";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-center sticky top-1 items-center gap-[25px] w-full z-10">
        <div className="w-[90%] sm:w-[50%] border flex items-center justify-center bg-gray-10/50 backdrop-blur-sm rounded-4xl p-2">
          <ul className="flex items-center text-base gap-[25px]">
            <li>
              <a href="#about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="/projects" className="hover:underline">Projects</a>
            </li>
            <input
              type="checkbox"
              className="toggle theme-controller toggle-sm"
              onChange={e => {
                const isNight = e.target.checked;
                document.documentElement.setAttribute("data-theme", isNight ? "dark" : "light");
              }}
            />

          </ul>
        </div>
      </div>
    </>
  );
}
