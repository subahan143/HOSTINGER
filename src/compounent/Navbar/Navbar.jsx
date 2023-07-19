import "./navbar.css"

const Navbar =()=>{
    return(
        <>
        <div className="navbar">
       <div className="nav1">
       <h1>H</h1>
       <h2>HOSTINGER</h2>
       <h3>TUTORIALS</h3>
       </div>
       <div className="nav2">
        <span>Hosting<i class="fa-solid fa-angle-down"></i></span>
        <span>VPS<i class="fa-solid fa-angle-down"></i></span>
        <span>Email<i class="fa-solid fa-angle-down"></i></span>
        <span>Domain<i class="fa-solid fa-angle-down"></i></span>
       </div>

        </div>
        </>
        )
    }
    
    export default Navbar