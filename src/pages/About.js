import { useEffect, useState } from "react"
import Header from "./Components/Header"
import biceps from "./media/biceps.jpg"
import handUp1 from "./media/hand-up-1.png"
import handUp2 from "./media/hand-up-2.jpg"
import medal from "./media/medal.jpg"
import preFight from "./media/pre-fight.jpg"
import trainingAction from "./media/training-action.png"
const images = [
    {
        alt : "After workout pic",
        src: biceps
    },
    {
        alt : "Hand being raised after competing",
        src: handUp1
    },
    {
        alt : "Standing on he podeum in first place",
        src: medal
    },
    {
        alt : "Rules meeting before coaching",
        src: preFight
    },
    {
        alt : "Hand being raised after competing",
        src: handUp2
    },
    {
        alt : "action shot during training",
        src: trainingAction
    },
]

const AboutPage = () => {
    const [a, seta] = useState(0)
    const [b, setb] = useState(1)
    const [c, setc] = useState(2)
    const [d, setd] = useState(3)
    const [e, sete] = useState(4)

    const increase = (val) => {
        if(val === images.length -1){
            return 0
        }else{
            return val+1
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            seta(increase(a))
            setb(increase(b))
            setc(increase(c))
            setd(increase(d))
            sete(increase(e))
        }, 2500)

        return () => clearTimeout(timer)
    }, [a, b, c, d, e])

    return (<>
        <Header/>
        <main>
            <h1>About Me</h1>
            <div className="text">
                <p>
                Hey there! I'm Callam. I am a young and ambitious man with a love of problem solving; 
                which has lead me down the developers rabbit whole. Enjoying braking things down and 
                rebuilding things from their first principle allows me to build code specific to the 
                problem at hand.
                </p>
                <p>
                Though coding is now my passion, my first love will always be combat sports. Wrestling
                from a young age and competing in Judo gave me my first taste at problem solving. Braking
                down techneques allowed me to rebuild them in new and unexpected ways.
                </p>
                <p>
                I have carried this approach to near everything in my life, from cometing to building audio 
                &#38; visual hardware and, most recently, software development. Only later did I learn that 
                this follows the hemetic prinsiple of Correspondence: <q>as above so below</q>.
                </p>
            </div>
            <ul>
                <img alt={images[a].alt} src={images[a].src} className="banner"/>
                <img alt={images[b].alt} src={images[b].src} className="banner"/>
                <img alt={images[c].alt} src={images[c].src} className="banner"/>
                <img alt={images[d].alt} src={images[d].src} className="banner"/>
                <img alt={images[e].alt} src={images[e].src} className="banner"/>                
            </ul>
        </main>
    </>)
}

export default AboutPage