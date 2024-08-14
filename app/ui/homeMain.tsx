import Image from "next/image"
import Contact from "./contact"

export default function HomeMain() {
    return(
        <main className="p-4">
            <Image
                src="/JR-bio-pic-desktop-tall.png"
                width={400}
                height={714}
                className="hidden md:block rounded-3xl border-solid border-4 border-teal-500"
                alt="A photograph of Joshua Robinson, Junior Software Engineer"
            />
            <Image
                src="/JR-bio-pic-mobile-square.png"
                width={250}
                height={250}
                className="block md:hidden rounded-full border-solid border-4 border-teal-500"
                alt="A photograph of Joshua Robinson, Junior Software Engineer"
            />
            <h1 className="text-2xl font-bold text-teal-500 p-1">I'm Joshua, and welcome to the home of my coding adventure!</h1>
            <section className="p-1">I've worked as a video and broadcast engineer for nearly twenty years, and I enjoyed writing code so much I decided to make a career of it and chartered a course into the world of software engineering. I wanted a place where I could chronicle my journey as a career-switching coder, and keep track of my projects and knowledge over the coming years. As such, this little den of knowledge includes links to completed projects, course progress and blog articles that I've written up. It is also a place fellow coders can contact me whether for employment opportunities, provide me with tips or advice, or even consult me on my own experiences if looking for advice of their own.</section>
            <section className="p-1">
                <ul className="list-disc list-inside">
                    <h2 className="font-bold text-teal-500">Here, you'll find:</h2>
                    <li>My blog detailing my coding adventure</li>
                    <li>Projects I've worked on</li>
                    <li>Associated code repositories</li>
                    <li>My most current curriculum vitae</li>
                    <li>Social media links and profiles</li>
                </ul>
            </section>
        </main>
    )
}