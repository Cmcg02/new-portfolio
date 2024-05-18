import { useEffect, useState } from "react"
import Header from "./Components/Header"
import mixedMessages from './media/mixed-messages.mp4'

const projects = [
    {
        name: "Mixed Messages",
        p: "My first working website. Simple html, css and javascript that will randomly generate a sentence and display an appropriate image. It is Lord of the Rings Themed",
        mp4: mixedMessages,
        length: 13500
    },
    {
        name: "Spotify Jammming",
        p: "A Spotify playlist maker. This makes CRUD operations on Spotify's API. Initially, I struggled with this project as it involed interacting with an external API. So I am rather proud that I managed to overcome these issues.",
        mp4: '#',
        length: 6000
    },
    {
        name: "Reddit Client",
        p: "This application allows users to view and search posts and comments provided by Reddit's API. It displays the data in a coherent and engaging way in order to direct users towards Reddits actual page.",
        mp4: '#',
        length: 6000
    },
    {
        name: "Ecommerce Shop",
        p: "My first full stack application. A shop where users can sign in (using Oauth or through the website), view products and add them to a cart, make payment and order the items in their cart. The shop sells hiking, camping, climbing, fishing and hunting equipment.",
        mp4: '#',
        length: 6000
    },
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

        const timer = setTimeout(() => {
            if(i === projects.length - 1){
                setI(0)
            }else{
                setI(i+1)
            }
        }, projects[i].length)

        const btns = document.getElementsByClassName("projectBtn")

        for(var x = 0; x<btns.length; x++){
            if(x===i){
                btns[x].style = "background-color:  rgb(231, 64, 92)"
            }else{
                btns[x].style = "background-color: auto"
            }
        }
        
        return () => clearTimeout(timer)
    }, [i])
    
    return (<>
        <Header/>
        <main>
            <h1>Projects</h1>
            <div id="projectSelect">
                <button onClick={()=>decrement()} id="lbtn">&larr;</button>
                <ul>
                    <button onClick={()=>setI(0)} className="projectBtn"></button>
                    <button onClick={()=>setI(1)} className="projectBtn"></button>
                    <button onClick={()=>setI(2)} className="projectBtn"></button>
                    <button onClick={()=>setI(3)} className="projectBtn"></button>
                </ul>
                <button onClick={()=>increment()} id="rbtn">&rarr;</button>
            </div>
            <div className="text" id="project">
                <section>
                    <h3 id="projectHeader">{projects[i].name}</h3>
                    <p>{projects[i].p}</p>
                </section>
                <video src={projects[i].mp4} type='video/mp4' autoPlay/>
            </div>
        </main>
    </>)
}

export default ProjectsPage