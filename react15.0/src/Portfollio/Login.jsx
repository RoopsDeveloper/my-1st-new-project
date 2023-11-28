import "../Portfollio/login.scss"
const Login = ()=>{
    return(
        <div className="Login">
        <section>
            <form>
            <input type="text" placeholder="Enter your name" />
                    <br />
                    <br />
                    <input type={"password"} placeholder="Enter your password" />
                    <br />
                    <br />
                    <a href="#">forget password?</a>
                    <br />
                    <br></br>
                    <button>Submit</button>
            </form>
        </section>
        </div>
    )
}
export default Login