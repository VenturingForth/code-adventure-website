import Image from "next/image";
import Header from "./ui/header";
import NavBar from "./ui/navbar";
import Contact from "./ui/contact";

export default function Home() {
  return (
    <>
    <Header />
    <NavBar />
    <main>
      <p>The home of Joshua Robinson's coding adventure, a junior full-stack developer looking for his first major role...</p>
      <p>Here, you'll find:
        <ul>
          <li>My blog detailing my coding adventure</li>
          <li>Projects I've worked on</li>
          <li>Associated code repositories</li>
          <li>My most current curriculum vitae</li>
          <li>Social media links and profiles</li>
        </ul>
      </p>
      <h2 className="text-base font-bold text-teal-500">Why Code Adventure?</h2>
      <p>I wanted a place where I could chronicle my journey as a career-switching coding, and keep track of my projects and knowledge over the coming years. As such, this little den of scrap knowledge includes links to completed projects, course progress and blog articles that I've written up. It is also a place fellow coders can contact me whether for employment opportunities, provide me with tips or advice, or even consult me on my own experiences if looking for advice of their own.</p>
      <Contact />
    </main>
    </>
  );
}
