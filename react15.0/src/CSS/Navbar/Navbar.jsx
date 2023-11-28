import "../Task1/Navbar/navbar.css"
const Navbar = ()=>{
    function cli(){
        document.body.div.style.background="red"

    }
    function dbcli(){
        document.body.style.background="blue"
        
    }
    return (
        <div className="Navbar">
            <nav>
                <div><i className="fa-brands fa-apple"></i></div>
                <div>Home</div>
                <div>About</div>
                <div>Gallery</div>
                <div>Contact</div>
                <div>Services</div>
                <div><i className="fa-solid fa-cart-shopping"></i></div>
                <button onClick={cli}>Dark</button>
                <button onDoubleClick={dbcli}>light</button>
            </nav>
        </div>
    )
}
export default Navbar