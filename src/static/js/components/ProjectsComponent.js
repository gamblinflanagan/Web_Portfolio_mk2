import React from "react";
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, ResponsiveEmbed } from 'react-bootstrap';

import "./style.css";
import Nav from "./sub_components/nav.js";

const leftProjects = [
    {
        link: "https://skylinemanorholdings.com/#/",
        title: "Skyline Manor Holdings",
        video: "",
        descrip: "I was the sol developer for an airbnb business tasked with creating their company website"
    },
    {
        link: "https://github.com/gamblinflanagan/Alarm-Clock",
        title: "Alarm Clock",
        video: "https://drive.google.com/file/d/1tG5X7ZEjV32QcS-5zpbjmydlMfrDcDV0/preview",
        descip: "IOS AND ANDROID VERSION COMING SOON, currently only available on mac os platforms At a time set by the user a random classical song will play and the voice will tell the user the exact date, time, and weather specific to the set location. The greeting ie: (Good morning sir, I hope you slept well sir) is completley customizeable for the user.",
    },
    {
        link: "https://github.com/gamblinflanagan/RPA_tic_tac_toe",
        title: "RPA TIC TAC TOE",
        video: "https://drive.google.com/file/d/1wOKY-LRrWboREnhY6RBZPKxNz42KfFvi/preview",
        descip: "The RPA bot will open the tic tac toe website and play the AI usng the minimax algorithm to decide its move Works on all Windows platforms with Workfusion installed.",
    },
    {
        link: "https://github.com/gamblinflanagan/Magic-8-Ball",
        title: "Magic 8 Ball",
        video: "https://drive.google.com/file/d/1IO73CvwRjJYf9km5O-8TR44AmXqzDVuo/preview",
        descip: "Swift IOS app of magic 8 ball toy, it knows the answer to any yes or no question",
    },
    {
        link: "https://github.com/gamblinflanagan/binary-dec-hex",
        title: "Binary, Decimal, Hexidecimal Converter",
        video: "https://drive.google.com/file/d/1QsG1XsFcA70X8YQpsQSt4fZc3OdgCi7R/preview",
        descip: "Python app that takes a number of the decimal, hexadecimal, or binary systems and coverts it to the other 2 systems",
    },
    {
        link: "https://cs490-project1-jcf29.herokuapp.com",
        title: "Recipe Website",
        video: "https://drive.google.com/file/d/1j4YFFWthdL6OW1NkNBvBPFSeFp79hYId/preview",
        descip: "Flask app that displays random recipe from API and displays tweets about it",
    },
    {
        link: "https://github.com/gamblinflanagan/pigdice",
        title: "Pig Dice Game",
        video: "https://drive.google.com/file/d/1s_DwXOuI_wq0PI_Tu8kWrlWToNoaatRN/preview",
        descip: "Python app of classic Pig Dice game",
    },
]

const rightProjects = [
    {
        link: "https://nj-homeless-donation-website.web.app",
        title: "NJ Homeless Donation site",
        video: "https://drive.google.com/file/d/1N2QM1RhYVii9auXoulnrPKG_svBGnlgC/preview",
        descip: "Donation site for Livingston Philanthropies inc",
    },
    {
        link: "https://cs490-project2m2-jcf29.herokuapp.com",
        title: "Chit Chat Messaging",
        video: "https://drive.google.com/file/d/1LbD14jp2Or7p_URdKP6nRI4QgLe9YTp0/preview",
        descip: "Flask/React Web chat app I designed and built my senior year of college",
    },
    {
        link: "https://github.com/gamblinflanagan/2x2_RubixCube",
        title: "Rubix Cube",
        video: "https://drive.google.com/file/d/1VlDmPaFXVzdEKNx23ZKgSzB0ndVBpAZr/preview",
        descip: "A C app of the classic 2x2 rubix cube",
    },
    {
        link: "https://github.com/gamblinflanagan/RPSLS",
        title: "Rock Paper Scissors Lizard Spock",
        video: "https://drive.google.com/file/d/1PPAwV57THDUHep6Xyt5uYksN6tyfKoZN/preview",
        descip: "Python app of the classic big bang theory game rock paper scissors lizard spock",
    },
    {
        link: "https://github.com/gamblinflanagan/roulette",
        title: "Roulette",
        video: "https://drive.google.com/file/d/1ZRguw79R0KfyLptxZ5Bh28zRWjns9CXu/preview",
        descip: "Java app of classic casino game roulette",
    },
    {
        link: "https://github.com/gamblinflanagan/Dice",
        title: "Dice",
        video: "https://drive.google.com/file/d/1CERSgkH7lbxKG7_kC4paKWyCpSVNNjb_/preview",
        descip: "IOS app that rolls two 6 sided dice",
    },
]

const left_proj_final = leftProjects.map(project => (
    <li id="project">
        <h2>
            <a target="_blank" href={project.link}>{project.title}</a>
        </h2>
        <ResponsiveEmbed aspectRatio="16by9">
            <iframe 
                className="Vid" 
                src={project.video} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
            ></iframe>
        </ResponsiveEmbed>
        <p>{project.descip}</p>
    </li>
))

const right_proj_final = rightProjects.map(project => (
    <li id="project">
        <h2>
            <a target="_blank" href={project.link}>{project.title}</a>
        </h2>
        <ResponsiveEmbed aspectRatio="16by9">
            <iframe 
                className="Vid" 
                src={project.video} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
            ></iframe>
        </ResponsiveEmbed>
        <p>{project.descip}</p>
    </li>
))



const ProjectsComponent = () => {

    return (
        <div className="Projects">
            <Nav />
            <Container id="Content" className="Scroll">
                <Row>
                    <Col md>
                        <div className="ProjectsContainer">
                            <h1 id="title">ALL Projects</h1>
                            <div className="TopProjects">
                                <Container>
                                    <Row>
                                        <Col md>
                                            <div className="LeftProjList">
                                                <ul>{left_proj_final}</ul>
                                            </div>
                                        </Col>
                                        <Col md>
                                            <div className="RightProjList">
                                                <ul>{right_proj_final}</ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProjectsComponent;