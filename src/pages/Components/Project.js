const projects = {
    "Mixed Messages": {
        p: "My first working website. Simple html, css and javascript that will randomly generate a sentence and display an appropriate image. It is Lord of the Rings Themed",
        img: {
            src: '#',
            alt: 'Screen Shot'
        }
    },
    "Spotify Jammming": {
        p: "A Spotify playlist maker. This makes CRUD operations on Spotify's API. Initially, I struggled with this project as it involed interacting with an external API. So I am rather proud that I managed to overcome these issues.",
        img: {
            src: '#',
            alt: 'Screen Shot'
        }
    },
    "Reddit Client": {
        p: "This application allows users to view and search posts and comments provided by Reddit's API. It displays the data in a coherent and engaging way in order to direct users towards Reddits actual page.",
        img: {
            src: '#',
            alt: 'Screen Shot'
        }
    },
    "Ecommerce Shop": {
        p: "My first full stack application. A shop where users can sign in (using Oauth or through the website), view products and add them to a cart, make payment and order the items in their cart. The shop sells hiking, camping, climbing, fishing and hunting equipment. DO NOT BUY ANYTHING ITS NOT REAL!",
        img: {
            src: '#',
            alt: 'Screen Shot'
        }
    },
}
const Project = (props) => {
    const {projectName} = props
    const project = projects[projectName]
    return (<>
        <section>
            <h3>{projectName}</h3>
            {/* <img src={project.img.src} alt={project.img.alt}/> */}
            <p>{project.p}</p>
        </section>
    </>)
}

export default Project