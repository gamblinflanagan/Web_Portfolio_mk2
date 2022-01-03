import React from "react";
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

import profile from "../../images/Linkedin.png";//"../../images/slack.png";
import "./style.css";
import Nav from "./sub_components/nav.js";


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
        *
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
        *
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
            <Nav />
            <Container id="Content" className="Scroll">
                <Row>
                    <Col md>
                        <div className="HomeContainer">
                            <h1>Welcome To My Website</h1>
                            <img id="background" src={link} />
                            <div className="Content">
                                <img id="profile" src={profile} />
                                <p>
                                    I am Joey Flanagan. I am an <a target="_blank" href="https://www.njit.edu">NJIT</a> alumnus and currently an Automation Test Engineer at IBM as well as a freelance web developer.
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