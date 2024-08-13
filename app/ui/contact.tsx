export default function Contact(){
    return (
        <>
            <h2 className="text-2xl font-semibold text-teal-500 p-1">Send me a note...</h2>
            <form className="grid grid-cols-2 grid-flow-row gap-2 p-1">
                <label>Email: </label>
                <input className="text-black" type="email" id="email"/>
                <label>Message: </label>
                <input className="text-black" type=""></input>
            </form>
        </>
    )
}