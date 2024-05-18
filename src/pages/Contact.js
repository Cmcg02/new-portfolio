import Header from "./Components/Header"

const ContactPage = () => (<>
    <Header/>
    <main>
        <h1>Contact</h1>
        <div className="text" id="contact">
            <p>
                Contact me at:<br/>
                Email: <a href="mailto:c.d.mcg@outlook.com">c.d.mcg@outlook.com</a><br/>
                Phone: <a href="tel:+447869410580">07869410580</a><br/>
            </p>
            <p>
                Visit my social media at:<br/>
                Github: <a href="https://github.com/Cmcg02">github.com/Cmcg02</a><br/>
                Instagram: <a href="https://www.instagram.com/callam_mcg/">instagram.com/callam_mcg</a>
            </p>
        </div>
    </main>
</>)

export default ContactPage