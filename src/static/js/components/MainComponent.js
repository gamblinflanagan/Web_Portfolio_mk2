import React from "react";
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

import profile from "../../images/Linkedin.png";//"../../images/slack.png";
import "./style.css";


/*
function usewindowSize () {
    const [size, setSize] = useState([window.innerHeight]);

    useEffect(() => { 
        const handleResize = () => {
            setSize([window.innerHeight]);
        };
        window.addEventListener("resize", handleResize);
    }, [])

    return size;
}
*/

function ChangeVis() {
    const content = document.getElementById("HomeContent");
    const nav = document.getElementById("nav");
    const x = document.getElementById("x");
    const navButtons = document.getElementById("mNavButtons");

    //const menu = document.querySelector('.Menu');
    //const navLinks = document.querySelector(".buttons");
    
    if (content.style.display !== "none") {

        nav.style.display = "none";
        x.style.display = "block";
        content.style.display = "none";
        navButtons.style.display = "block";

        /*
        menu.addEventListener('click', () => {
            navlinks.classList.toggle("open");
        });
        */
    }
    else {

        nav.style.display = "block";
        x.style.display = "none";
        content.style.display = "block";
        navButtons.style.display = "none";

        /*
        menu.addEventListener('click', () => {
            navlinks.classList.toggle("open");
        });
        */
    }
}
    /*
    const menu = document.querySelector('.Menu');
    const navLinks = document.querySelector(".buttons");

    menu.addEventListener('click', () => {
        navlinks.classList.toggle("open");
    });
    */

const link = "https://i.pinimg.com/originals/20/ae/f2/20aef23d39a8dcb74bf663ed89ab08d6.gif";

const MainComponent = () => {
    return (
        <div className="Home">
            <div className="Nav">
                <div className="Menu">
                    <button className="nav-button" onClick={ChangeVis} >
                        <div id="nav">
                            <hr id="topline"/>
                            <hr />
                            <hr />
                        </div>
                        {/*
                        <div className="xlines" id="x" style={{ display: "none" }}>
                            <hr id="topx"/>
                            <hr id="bottomx"/>
                        </div>
                        */}
                    </button>
                </div>
                <div className="buttons" id="navButtons">
                    <Link className="links" to='/'>
                        <Button className="login-button">
                            Home
                        </Button>
                    </Link>
                    <Link className="links" to='/about'>
                        <Button className="login-button">
                            Resume
                        </Button>
                    </Link>
                    <Link className="links" to='/projects'>
                        <Button className="login-button">
                            Projects
                        </Button>
                    </Link>
                    <Link className="links" to='/contact'>
                        <Button className="login-button">
                            Contact
                        </Button>
                    </Link>
                </div>
                {/* second class to be deleted in future update */}
                <div className="buttons" id="mNavButtons" style={{ display: "none" }}>
                    
                    <button className="x-button" onClick={ChangeVis} id="x" style={{ display: "none" }}>
                        <div className="xlines">
                            <hr id="topx"/>
                            <hr id="bottomx"/>
                        </div>
                    </button>
                   
                   
                    
                    <Link className="links-top"  to='/'>
                        <Button className="login-button">
                            Home
                        </Button>
                    </Link>
                    <Link className="links" to='/about'>
                        <Button className="login-button">
                            Resume
                        </Button>
                    </Link>
                    <Link className="links" to='/projects'>
                    <   Button className="login-button">
                            Projects
                        </Button>
                    </Link>
                    <Link className="links" to='/contact'>
                        <Button className="login-button">
                            Contact
                        </Button>
                    </Link>
                </div>
            </div> 

           
            <Container id="HomeContent" className="Scroll">
                <Row>
                    <Col md>
                        <div className="HomeContainer">
                            <h1>Welcome To My Website</h1>
                            <img id="background" src={link} />
                            <div className="Content">
                                <img id="profile" src={profile} />
                                <p>
                                    I am Joey Flanagan. I am a full stack developer and NJIT alumni.
                                    More About Me in the <Link id="more" to='/about'>Resume Page</Link>
                                </p>
                            </div> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainComponent;