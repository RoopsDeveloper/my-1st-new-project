import "./resume.css"
const Resume = ()=>{
    return(
        <div>
            <nav>
                <div>SD</div>
                <div>Home</div>
                <div>About</div>
                <div>Projects</div>
                <div>Contact</div>
                <div><i className="fa-brands fa-facebook"></i></div>
                <div><i className="fa-brands fa-linkedin"></i></div>
                <div><i className="fa-brands fa-twitter"></i></div>
            </nav>
            <section>
                {/* <img src="https://i.pinimg.com/736x/e3/51/92/e35192c82d62d15b1df52dddd6194c00--night-style-telugu.jpg" ></img> */}
                <h1>SUDESH GOWDA MD</h1>
                <h2>WEB DEVELOPER</h2>
                <button>CONTACT ME</button>
            </section>
            <main>
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate alias deleniti blanditiis ex, temporibus pariatur cum dolore laborum ducimus vel repellendus impedit esse accusamus maiores earum adipisci odit. Doloremque, facere.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste vitae veniam possimus quidem eius inventore, nostrum nemo pariatur distinctio consequuntur accusamus quae quisquam non cupiditate quaerat soluta quibusdam unde! Incidunt.</p>
            <button id="btn2">DOWNLOAD RESUME</button>
            </main>
        </div>

    )
}
export default Resume