import { Link } from "react-router-dom"

const Header = () => (<header>
    <h1>C. Mcgaughey</h1>
    <h2>Software Developer</h2>
    <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/contact'}>Contact</Link>
    </nav>
</header>)

export default Header