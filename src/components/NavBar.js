import React from 'react'
import { Link } from "react-router-dom";
import newshub from './newshublogo.png'

const NavBar = (props) => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-dark">
                <div className="container-fluid">
                <button className="navbar-toggler navbar-dark bg-dark" style={{border:"1px solid white"}} type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <Link className="navbar-brand position-absolute top-0 start-50 translate-middle-x" to="/"><img src={newshub} alt="hello" height="50"/></Link>                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/" style={{color:"white" ,fontWeight:"500"}}>Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/business" style={{color:"white",fontWeight:"500"}}>Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment" style={{color:"white",fontWeight:"500"}}>Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health" style={{color:"white",fontWeight:"500"}}>Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science" style={{color:"white",fontWeight:"500"}}>Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports" style={{color:"white",fontWeight:"500"}}>Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology" style={{color:"white",fontWeight:"500"}}>Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar
