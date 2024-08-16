import projectsJson from '../../public/data/projects.json'
import ProjectCard from './ProjectCard';

export default function ProjectList(){
    interface Project {
        title: string;
        tech: string[];
        description: string;
        github: string;
        url: string;
    }
    const projects:Array<Project> = projectsJson.projects;
    return (
        <ul className='grid grid-cols-2 gap-4'>
            {projects.map((project) => {
                return (
                    <ProjectCard {...project} />
                )
            })}
        </ul>
    )
}