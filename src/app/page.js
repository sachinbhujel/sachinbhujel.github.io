import ProjectsList from "./components/ProjectsList";
import TechLists from "./components/TechLists";
import About from "./components/About";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
      <div>
        <main className="mt-5 p-4">
          <Profile />
          <About />
          <div className="mt-11" id="projects">
            <h2 className="text-2xl">Projects</h2>
            <ProjectsList />
          </div>
          <div className="mt-11">
            <h2 className="text-2xl">Tech Stack</h2>
            <TechLists />
          </div>
          <div className="mt-11">
            <h2 className="text-2xl">Learning Experience</h2>
            <Experience />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
