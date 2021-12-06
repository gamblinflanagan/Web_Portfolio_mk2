import React from "react";
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

import "./style.css";

/*
function usewindowSize () {
    const [size, setSize] = useState([window.innerWidth]);

    useEffect(() => { 
        const handleResize = () => {
            setSize([window.innerWidth]);
        };
        window.addEventListener("resize", handleResize);
    }, [])

    return size;
}
*/

function ChangeVis() {
    const content = document.getElementById("AboutContent");
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



const AboutComponent = () => {

   //const height = usewindowSize();

    return (
        <div className="About">
            {/*<h1 style={{ color: "blue" }}>height: {height}</h1>*/}
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
            
            <Container id="AboutContent" className="Scroll">
                <Row>
                    <Col md>
                    <a id="PDF" target="_blank" href="https://drive.google.com/file/d/1g59H5fVOdHSKVDsHdgYaRa_AxZvkGeTV/view?usp=sharing" style={{ color: "dodgerblue" }}>Download PDF version here</a>
                        <div className="ResumeContainer">	
                            {/*}
                            <div className="Vid">
                            style={{ height: "{height}" }}
                                <iframe
                                    src="https://www.youtube.com/embed/m6Sj7VAiOv4"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                            */}
                            <div className="ResumeSummary">
                                <h2>About me</h2>
                                <p>
                                I am currently an Automation Test Specialist at IBM as well as a freelance web developer. I have a Bachelor of Science degree in Computer
Science from the <a target="_blank" href="https://www.njit.edu">New Jersey Institute of Technology. </a> During my curriculum I gained key
knowledge and experience in the field of Computer Science, and I became effective at
self-learning, adapting to any new changes, analyzing the situation and communicating
proactively to ensure not just success on my part, but success for the project as a whole.
Currently my strongest technical skills are Python, and React js
                                </p>
                                <h2>Education</h2>
                                <p>
                                    B.S. in Computer Science New Jersey Institute of Technology
                                </p>   
                            </div>
                            <div className="ResumeSkills">
                                <h2>All Relevant Skills</h2>
                                <ul id="leftskills">
                                    <li>Windows/Mac Os/Linux</li>
                                    <li>Python</li>
                                    <li>Flask/Django</li>
                                    <li>HTML/CSS/PHP/JavaScript/XML</li>
                                    <li>Node.js/React.js/React Native</li>
                                    <li>REST APIs</li>
                                    <li>mySQL/postgreSQL</li>
                                    <li>Java/Groovy</li>
                                </ul>
                                <ul id="rightskills">
                                    <li>WorkFusion/Selenium</li>
                                    <li>Robotic Processing Automation (RPA)</li>
                                    <li>Data Structures/Algorithms</li>
                                    <li>C/C++/C#</li>
                                    <li>Swift</li>
                                    <li>Version Control (Git, Github)</li>
                                    <li>SCRUM</li>
                                    <li>Agile Methodologies</li>
                                </ul>
                            </div>
                            <div className="Experience">
                                <h2>Professional Experience</h2>
                                {/*<h4>New Jersey Institute of Technology Media Technology Support Services</h4>
                                <h5>Special Event/Delivery Technician</h5>
                                <ul className="XpDescrip">
                                    <li>Executed and managed, of at least 40 online and offline classes and multiple special events, the facilitation of
media customer requests related to delivery, setup, troubleshooting and replacement of essential media, audio,
visual, computer hardware and software equipment.</li>
                                    <li>Delivered essential training and support to end users to ensure successful delivery.</li>
                                    <li>Test media equipment of all classrooms daily to ensure equipment is in proper condition, and fix to the best of
my ability whichever equipment is not.</li>
                                </ul>
                                <h5>Saturday Delivery Manager</h5>
                                <ul className="XpDescrip">
                                    <li>Oversee the delivery portion of the department</li>
                                    <li>Handle any disputes between employees and clients in a professional and personable manner</li>
                                    <li>Provide Support for all and train newer employees</li>
                                </ul>*/}
                                <h4>IBM</h4>
                                <h5>Automation Test Specialist</h5>
                                <ul className="XpDescrip">
                                    <li>Design and create tests(automated and manual), test data and test environments using tools
such as Selenium, Protractor, Katalon, Cucumber, etc.</li>
                                    <li>Identify, analyze, and document all errors and validate successes for any software solution</li>
                                    <li>Verify fixes after they are applied to a test system and verifying the results of test cases</li>
                                    <li>Contribute to the continuous improvement of processes</li>
                                    <li>Analyze and present test results to clients and project teams clearly</li>
                                </ul>

                                <h4>Selective Insurance</h4>
                                <h5>Ignite Intern</h5>
                                <ul className="XpDescrip">
                                    <li>Help team design build and update any Corporate Systems applications.</li>
                                    <li>Provide support for future RPA projects.</li>
                                    <li>Complete Senior intern Action Learning Project.</li>
                                    <li>Foster Sense of collaboration, demonstrate self-awareness and understand company strategy, and drive
business forward by making sound decisions and developing creative solutions.</li>
                                </ul>
                                <h5>Seasonal Support</h5>
                                <ul className="XpDescrip">
                                    <li>Same as Above</li>
                                </ul>

                                <h4>Kashmir World Foundation</h4>
                                <h5>Ai Engineer-Machine Learning Intern</h5>
                                <ul className="XpDescrip">
                                    <li>Use Deep Learning algorithms for surveillance drones to help create a map of snow leopards’ habitat based on
their behavior.</li>
                                </ul>
                               
                                <h2>Certifications</h2>
                                <ul className="XpDescrip">
                                    <li><a target="_blank" href="https://drive.google.com/file/d/1_e2s1MFWT9CmrsQylvAt1iIivtZJaMQs/view?usp=sharing" style={{ color: "dodgerblue" }}>AWS Certified Cloud Practitioner</a></li>
                                    <li><a target="_blank" href="https://drive.google.com/file/d/10gUvzAh5u-311tXYVSQo0zmjoiNDZePl/view?usp=sharing" style={{ color: "dodgerblue" }}>Work Fusion Power User</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>            
        </div>
    );
};

export default AboutComponent;