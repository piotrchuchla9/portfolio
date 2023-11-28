import { About } from "./components/about";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Technology } from "./components/technology";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center ">
        <div className="">
          <Hero />
          <Projects />
          <About />
          <Technology />
        </div>
      </div>
      <Footer />
    </div>
  );
}
