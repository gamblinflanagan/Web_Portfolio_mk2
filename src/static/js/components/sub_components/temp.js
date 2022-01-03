import React from "react";
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

import "../style.css";
import Nav from "./nav.js";
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
    const content = document.getElementById("ContactContent");
    const nav = document.getElementById("nav");
    const x = document.getElementById("x");
    const navButtons = document.getElementById("mNavButtons");

    
    if (content.style.display !== "none") {
        nav.style.display = "none";
        x.style.display = "block";
        content.style.display = "none";
        navButtons.style.display = "block";
    }
    else {
        nav.style.display = "block";
        x.style.display = "none";
        content.style.display = "block";
        navButtons.style.display = "none";
    }
}



const Temp = () => {
    return (
        <div className="Contact">
            {/*
            <div className="Nav">
                <div className="Menu">
                    <button className="nav-button" onClick={ChangeVis} >
                        <div id="nav">
                            <hr id="topline"/>
                            <hr />
                            <hr />
                        </div>
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
                    <Link className="mlinks" to='/about'>
                        <Button className="login-button">
                            Resume
                        </Button>
                    </Link>
                    <Link className="mlinks" to='/projects'>
                        <Button className="login-button">
                            Projects
                        </Button>
                    </Link>
                    <Link className="mlinks" to='/contact'>
                        <Button className="login-button">
                            Contact
                        </Button>
                    </Link>
                </div>
            </div>
        */}
    
            <Nav />    
            <Container id="Content" className="Scroll">
                <Row>
                    <Col md>
                        <div className="ContactContainer">
                            <h1>TEMP PAGE</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Temp;
