import ProjectList from "../ui/ProjectList";

export default function Page(){
    return(
        <main className="m-4 p-4">
            <h1 className="text-2xl font-bold text-center text-teal-500">Projects</h1>
            <ProjectList />
        </main>
    )
}