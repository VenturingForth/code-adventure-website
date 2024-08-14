import Image from "next/image";
import Link from "next/link";

interface Project {
    title: string;
    tech: string[];
    description: string;
    github: string;
    url: string;
}

// const gitHubLogoStyle = {
//     display: 'inline'
// }

export default function ProjectCard(project: Project) {
    
    return(
        <div className="p-1 m-1 bg-slate-500 rounded-lg">
            <h2 className="">{project.title}</h2>
            <h3>Tech Stacks:</h3>
            {project.tech.map((stack) => <p>{stack}</p>)}
            <p>{project.description}</p>
            <p>
                <Link href={project.github}>
                    <Image 
                        src="/icons/github-mark.png"
                        width={25}
                        height={25}
                        alt="Github Logo"
                        className="inline"
                    />
                    Github Repo
                </Link>
                <Link href={project.url}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                    Live Demo
                </Link>
            </p>
        </div>
    )
}