import "./Sass.scss"
const Sass=()=>{
    return(
        <div className="Sass">
            <section>
                <form>
                    <input type="text" placeholder="Enter your name" />
                    <br />
                    <input type={"email"} placeholder="Enter your email" />
                    <br />

                    <input type={"password"} placeholder="Enter your password" />
                    <br />
                    <button>Submit</button>

                </form>
            </section>
        </div>
        
    )
}
export default Sass