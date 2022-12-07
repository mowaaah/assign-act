import {Link} from 'react-router-dom';
import icon from './assets/img/website logo.png';

function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#F8E0D5"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={icon} style={{width:"150px"}} alt="icon-logo"/></Link>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>*/}
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link nabvrButton" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nabvrButton" to="/booklist">Book List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nabvrButton" to="/about">About</Link>
                            </li>
                        </ul>
                    </div> 
                    <div class="col-lg d-flex justify-content-end mx-2 my-1">
                        <Link to="/login" className='logBttn'><button type="button" className="form-control btn joinBttn rounded-0">Log In</button></Link>
                    </div>
                    <div class="d-flex justify-content-end mx-2 my-1">
                        <Link to="/registration" className='logBttn'><button type="button" className="form-control btn joinBttn rounded-0">Register</button></Link>
                    </div>
                 </div>
            </nav>
        </div>
    )
}

export default Navbar;