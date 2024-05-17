import Header from "./Components/Header"

const AboutPage = () => (<>
    <Header/>
    <h1>About Me</h1>
    <div className="bio">
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
    <button>&larr;</button>
    <ul>
        <li>
            <img alt="action shot"/>
        </li>
        <li>
            <img alt="action shot"/>
        </li>
        <li>
            <img alt="action shot"/>
        </li>
        <li>
            <img alt="action shot"/>
        </li>
        <li>
            <img alt="action shot"/>
        </li>
        <li>
            <img alt="action shot"/>
        </li>
        <li>
            <img alt="action shot"/>
        </li>
    </ul>
    <button>&rarr;</button>
</>)

export default AboutPage