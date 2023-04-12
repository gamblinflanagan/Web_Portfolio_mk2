import React from "react";
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

import "./style.css";
import Nav from "./sub_components/nav.js";


//Contact Form
//https://victorbruce82.medium.com/how-to-send-emails-to-a-custom-smtp-server-using-react-and-emailjs-no-server-side-code-d9093e488c73


const ContactComponent = () => {
    return (
        <div className="Contact">
            <Nav />
            <Container id="Content" className="Scroll">
                <Row>
                    <Col md>
                        <div className="ContactContainer">
                            <h1>Let's Get In Touch</h1>
                            <h5>Cell: (973) 570-2383</h5>
                            <h5>Voice: (862) 955-2657</h5>
                            <h5>Email: jcf29@njit.edu</h5>
                            <h2>Social Media</h2>
                            <div className="Social">
                                <h5>
                                    <a target="_blank" href="https://www.linkedin.com/in/joseph-flanagan-jr-728586103/">Linkedin</a>
                                </h5>
                                <h5>
                                    <a target="_blank" href="https://github.com/gamblinflanagan/">Github</a>
                                </h5>
                                <h5>
                                    <a target="_blank" href="https://my.indeed.com/p/josephf-2ahol8e">Indeed</a>
                                </h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactComponent;