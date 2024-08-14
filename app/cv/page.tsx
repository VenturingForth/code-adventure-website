import Link from "next/link";
import Footer from "../ui/footer";
import Header from "../ui/header";
import NavBar from "../ui/navbar";

export default function Page(){
    return (
        <>
            <main className="p-4">
                <h1 className="text-2xl font-bold text-center text-teal-500">Curriculum Vitae of Joshua Robinson</h1>
                <h2 className="text-xl font-bold text-center text-teal-500">Junior Software Developer</h2>
                <Link
                    href="./files/240809_CV_JoshuaRobinson.pdf"
                    className="flex justify-center"
                    rel="noopener noreferrer"
                    target="_blank">
                    Download the PDF
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                </Link>
                <address className="text-center">
                    Newcastle upon Tyne <br />
                    P: 07478 126 089 | E: joshua@codeadventure.uk
                </address>
                <section className="m-4 p-4">
                    <h2 className="text-xl font-bold text-teal-500">Personal Statement</h2>
                    <p>I am a junior software developer looking to break into his first major full-stack role exploring different tech stacks beyond web development. I rediscovered a love of problem solving and creative thinking when I moved from video engineering into coding, which stemmed from an initial belief that it would compliment an existing skill set. I strive to take great care with my work, and to justify it with honest, straightforward conversation. I look forward to expanding my knowledge into challenging spaces and applying it in the pursuit of making people’s lives easier.</p>
                </section>
                <section className="m-4 p-4">
                    <h2 className="text-xl font-bold text-teal-500">Technical Skills</h2>
                    <h3 className="font-bold italic text-green-400">Languages</h3>
                    <p>JavaScript and TypeScript, using Node.js and browsers as the environment. Currently learning C# and the .NET framework.</p>
                    <h3 className="font-bold italic text-green-400">Testing</h3>
                    <p>Test driven developmenmt (TDD), Jest, Supertest, Vitest.</p>
                    <h3 className="font-bold italic text-green-400">Back End</h3>
                    <p>SQL, PostGreSQL, seeding and migrations.</p>
                    <h3 className="font-bold italic text-green-400">Front End</h3>
                    <p>HTML, CSS, React, React Native, Bootstrap React,Next.js, Tailwind, Lighthouse and other accessibility tools.</p>
                    <h3 className="font-bold italic text-green-400">Hosting</h3>
                    <p>Cloudflare, Netlify, Docker.</p>
                    <h3 className="font-bold italic text-green-400">Other</h3>
                    <p>Paired programming, technical communication, SDL,Agile and SCRUM methodologies.</p>
                </section>
                <section className="p-4 m-4">
                    <h2 className="text-xl font-bold text-teal-500">Work Experience</h2>
                    <h3 className="font-bold italic text-green-400">Trainee Software Developer, Northcoders</h3>
                    <time>November 2023 to March 2024</time>
                    <p className="italic">13 weeks of coding full stack web development with a focus on JavaScript, TDD, SQL and React. Paired programming was common practice as well as reading and writing technical documentation. Summed up with a group project phase where a mobile coding kata app  was designed and delivered over three weeks.</p>
                    <h3 className="font-bold italic text-green-400">Video Engineer, Clockwork Dreams</h3>
                    <time>February 2019 to November 2023</time>
                    <p className="italic">Provided video conferencing and webcasting solutions to the corporate events sector. Project highlights included the design, documentation and implementation of virtual courtroom solutions during the pandemic.</p>
                    <h3 className="font-bold italic text-green-400">Audio Visual Manager, She's Gott It Events</h3>
                    <time>May 2017 to January 2019</time>
                    <p className="italic">Technical production management of events including crew and equipment logistics. Delivered creative solutions for a variety of live events under tight budgetary constraints and short turnarounds.</p>
                    <h3 className="font-bold italic text-green-400">Freelance Audio Visual Technician, United Kingdom & Australia</h3>
                    <time>November 2010 to April 2017</time>
                    <p className="italic">Technical production expertise was provided in the fields of camera operation, projection and display setup, broadcast mixing and video editing for live events and in-house meeting room support in London and Sydney.</p>
                </section>
                <section className="p-4 m-4">
                    <h2 className="text-xl font-bold text-teal-500">Education</h2>
                    <p>Graduate Diploma in Producing & Screen Business | Australian Film Telelvion and Radio School | Graduated 2012</p>
                    <p>Foundation Diploma | Australian Film Television and Radio School | Graduated 2010</p>
                </section>
                <section className="p-4 m-4">
                    <h2 className="text-xl font-bold text-teal-500">Hobbies & Interests</h2>
                    <p>I regularly attend coding events in Newcastle and the North East, completing katas and challenges with local developers as well as keeping up to date with local and regional industry. I also continue to work on my own coding projects, and find ways of combining it with my other hobbies such as 3D printing and tabletop gaming.</p>
                </section>
            </main>
        </>
    )
}