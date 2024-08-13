import Image from "next/image";
import Header from "./ui/header";
import NavBar from "./ui/navbar";
import Contact from "./ui/contact";
import Link from "next/link";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <>
    <Header />
    <NavBar />
    <main className="p-4">
      <h1 className="text-2xl font-bold text-teal-500 p-1">I'm Joshua, and welcome to the home of my coding adventure!</h1>
        <section className="p-1">I've worked as a video and broadcast engineer for nearly twenty years, and I enjoyed writing code so much I decided to make a career of it and chartered a course into the world of software engineering. I wanted a place where I could chronicle my journey as a career-switching coder, and keep track of my projects and knowledge over the coming years. As such, this little den of knowledge includes links to completed projects, course progress and blog articles that I've written up. It is also a place fellow coders can contact me whether for employment opportunities, provide me with tips or advice, or even consult me on my own experiences if looking for advice of their own.</section>
        <section className="p-1">
          <ul>Here, you'll find:
            <li>My blog detailing my coding adventure</li>
            <li>Projects I've worked on</li>
            <li>Associated code repositories</li>
            <li>My most current curriculum vitae</li>
            <li>Social media links and profiles</li>
          </ul>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
