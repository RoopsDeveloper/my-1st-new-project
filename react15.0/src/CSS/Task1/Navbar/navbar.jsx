import './navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav>
                <div className="logo"><h1>SD</h1></div>
                <div className="title">
                    <div>Home</div>
                    <div>About</div>
                    <div>Project</div>
                    <div>Contact</div>
                </div>
                <div className="media"><i className="fa-brands fa-facebook"></i><i className="fa-brands fa-linkedin"></i><i className="fa-brands fa-twitter"></i></div>
        </nav>
      
    </div>
  )
}

export default Navbar
