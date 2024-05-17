import { useEffect, useState } from "react"
import Header from "./Components/Header"
import Project from "./Components/Project"

const projects = [
    "Mixed Messages",
    "Spotify Jammming",
    "Reddit Client",
    "Ecommerce Shop"
]

const ProjectsPage = () => {
    const [i, setI] = useState(0)

    const increment = () => {
        if(i === projects.length - 1){
            setI(0)
        }else{
            setI(i+1)
        }
    }
    const decrement = () => {
        if(i === 0){
            setI(projects.length -1)
        }else{
            setI(i-1)
        }
    }

    useEffect(() => {
    const timer = setTimeout(() => increment(), 6500)
    return () => clearTimeout(timer)
    }, [i])

    
    return (<>
        <Header/>
        <h1>Projects</h1>
        <button onClick={()=>decrement()}>&larr;</button>
        <Project projectName={projects[i]}/>
        <button onClick={()=>increment()}>&rarr;</button>
    </>)
}

export default ProjectsPage