import Header from "./Components/Header"
import profilePic from "./media/profile.jpg"

const WelcomePage = () => (<>
    <Header/>
    <main>
        <h1 id="welcome">Welcome</h1>
        <img alt="Profile Pic" src={profilePic} id="profilePic"/>
    </main>

</>)

export default WelcomePage