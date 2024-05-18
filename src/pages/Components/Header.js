import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    const nav = useNavigate()
    return (<header>
        <h1>Callam McGaughey</h1>
        <h2>Software Developer</h2>
        <nav>
            <span onClick={()=>nav('/')}>Home</span>
            <span onClick={()=>nav('/about')}>About</span>
            <span onClick={()=>nav('/projects')}>Projects</span>
            <span onClick={()=>nav('/contact')}>Contact</span>
        </nav>
    </header>)
}

export default Header