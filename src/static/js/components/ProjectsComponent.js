import React from "react";
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, ResponsiveEmbed } from 'react-bootstrap';

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
    const content = document.getElementById("ProjectsContent");
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

const projects = [
    {
        name: "Web Template",
        link: "https://github.com/gamblinflanagan/Web_Template",
        desc: "My Web Template for all Flask/React web projects"
    },
    {
        name: "Chit Chat Messaging",
        link: "https://github.com/gamblinflanagan/CS490_Project2m3-jcf29",
        desc: "Flask/React Web chat app I designed and built my senior year of college"
    },
    {
        name: "Magic 8 Ball",
        link: "https://github.com/gamblinflanagan/Magic-8-Ball",
        desc: "Swift IOS app of magic 8 ball toy, it knows the answer to any yes or no question"
    },
    {
        name: "Rubix Cube",
        link: "https://github.com/gamblinflanagan/2x2_RubixCube",
        desc: "A C app of the classic 2x2 rubix cube"
    },
    {
        name: "Rock Paper Scissors Lizard Spock",
        link: "https://github.com/gamblinflanagan/RPSLS",
        desc: "Python app of the classic big bang theory game rock paper scissors lizard spock"
    },
    {
        name: "Binary, Decimal, Hexidecimal Converter",
        link: "https://github.com/gamblinflanagan/binary-dec-hex",
        desc: "Python app that takes a number of the decimal, hexadecimal, or binary systems and coverts it to the other 2 systems"
    },
    {
        name: "Roulette",
        link: "https://github.com/gamblinflanagan/roulette",
        desc: "Java app of classic casino game roulette"
    },
    {
        name: "Programming Language Compiler",
        link: "https://github.com/gamblinflanagan/compiler",
        desc: "C++ app of a classic C based language compiler"
    },
    {
        name: "Recipe Website",
        link: "https://github.com/gamblinflanagan/CS490_Project1-jcf29",
        desc: "Flask app that displays random recipe from API and displays tweets about it"
    },
    {
        name: "Pig Dice Game",
        link: "https://github.com/gamblinflanagan/pigdice",
        desc: "Python app of classic Pig Dice game"
    },
    {
        name: "Dice",
        link: "https://github.com/gamblinflanagan/Dice",
        desc: "IOS app that rolls two 6 sided dice"
    },
    {
        name: "Even More",
        link: "https://github.com/gamblinflanagan/",
        desc: ""
    },
]

const lst_final = projects.map(project => (
    <li id="project">
        <h4>
            <a target="_blank" href={project.link}>{project.name}</a>
        </h4>
        <p>{project.desc}</p>
    </li>
))



const ProjectsComponent = () => {

    return (
        <div className="Projects">
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
            </div>
           
            <Container id="ProjectsContent" className="Scroll">
                <Row>
                    <Col md>
                        <div className="ProjectsContainer">
                            <h1 id="title">Top 2 Projects</h1>
                            <div className="TopProjects">
                                <Container>
                                    <Row>
                                        <Col md>
                                            <div className="Alarm">
                                                <h2><a target="_blank" href="https://github.com/gamblinflanagan/Alarm-Clock">Alaram Clock</a></h2>
                                                <ResponsiveEmbed aspectRatio="16by9">
                                                    <iframe 
                                                        className="Vid" 
                                                        src="https://drive.google.com/file/d/1tG5X7ZEjV32QcS-5zpbjmydlMfrDcDV0/preview" 
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen={true}
                                                    ></iframe>
                                                </ResponsiveEmbed>
                                                <p>IOS AND ANDROID VERSION COMING SOON, currently only available on mac os platforms</p>
                                                <p>At a time set by the user a random classical song will play and the voice will tell the user the exact date, time, and weather specific to the set location. The greeting ie: (Good morning sir, I hope you slept well sir) is completley customizeable for the user.</p>
                                            </div>
                                        </Col>
                                        <Col md>
                                            <div className="TicTacToe">
                                            <h2><a target="_blank" href="https://github.com/gamblinflanagan/RPA_tic_tac_toe">RPA TIC TAC TOE</a></h2>
                                                <ResponsiveEmbed aspectRatio="16by9">
                                                    <iframe 
                                                        className ="Vid" 
                                                        src="https://drive.google.com/file/d/1wOKY-LRrWboREnhY6RBZPKxNz42KfFvi/preview"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen={true}
                                                    ></iframe>
                                                </ResponsiveEmbed>
                                            </div>
                                            <p>COMING SOON the ability to play my bot on this webiste.</p>
                                            <p>Works on all Windows platforms with <a target="_blank" href="https://www.workfusion.com">Workfusion</a> installed.</p>
                                            <p>The RPA bot will open the tic tac toe website and play the AI usng the minimax algorithm to decide its move.</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <div className="ProjectList">
                                <h2>Other Projects with links</h2>
                                <ul>{lst_final}</ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProjectsComponent;