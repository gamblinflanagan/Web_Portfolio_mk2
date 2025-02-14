import React from "react";
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import "./style.css";
import Nav from "./sub_components/nav.js";

const AboutComponent = () => {

   //const height = usewindowSize();
   const techSkills = [ "JavaScript, TypeScript", "HTML", "CSS/SCSS/SASS", "Tailwind", "node.js, NPM, yarn", "React", "Next",
    "React Native, Expo", "Redux", "Angular", "Vue", "REST APIs", "Python", "Flask, Django", "Java", "mySQL/postgreSQL", "jenkins", "git, github, gitlab"
   ];

   const softSkills = [ "Software Architecture & Design", "Cloud Platforms", "Continuous Integration", "Continuous Deployment (CI/CD)", "Version Control Systems",
    "Database Management", "Debugging & Troubleshooting", "Testing & Quality Assurance", "Software Optimization", "Performance Tuning", 
    "Cross-Functional Team Collaboration", "Stakeholder Communication", "Client Relations", "API Development & Integration", "Project Management", "Dev Ops", "Agile, SCRUM"
   ];

   const vonageXp = [ "Designed, developed, tested, and documented complex software systems and applications, including integrating Clio, ConnectWise, and Zoho CRMs into the Vonage Business Platform by developing seamless API connections and optimizing data synchronization.",
    "Identified and resolved a critical system-wide bug affecting core functionalities before it was detected by QA or customers, implementing a robust debugging process that strengthened platform stability and prevented potential service disruptions.",
    "Designed and implemented a new authentication user interface for JobDiva CRM by aligning with updated security protocols, enhancing login efficiency, and improving compliance with evolving industry standards for user authentication.",
    "Developed a fully customized user interface for HubSpot CRM to support newly introduced features, refining user interactions, optimizing navigation, and streamlining workflows to enhance operational efficiency for business clients.",
    "Reduced application defects by 70% through rigorous debugging, optimizing front-end code, and implementing automated testing strategies, ensuring a more stable, efficient, and user-friendly experience for customers.",
    "Engineered a secure authorization UI component for the Vonage Contact Center application using Vue.js, enhancing access management, strengthening authentication processes, and ensuring a seamless and intuitive user experience."
    ];
   const ibmXp = [ "Designed and developed automated and manual test cases by utilizing tools such as Selenium, Protractor, Katalon, and Cucumber to create robust test data, configure test environments, and enhance software validation processes.",
    "Identified, analyzed, and documented software defects by conducting extensive testing, diagnosing root causes, and collaborating with development teams to implement effective resolutions that improved overall system functionality.",
    "Verified applied fixes by executing regression tests, validating software stability, and ensuring test cases produced accurate results before deployment to maintain product integrity and minimize post-release issues.",
    "Earned the Service Excellence Award for delivering outstanding results on a high-priority Delta project, independently managing all testing responsibilities, resolving critical challenges, and ensuring seamless execution within project timelines."
    ];
   const selectiveXp = [ "Designed, built, and enhanced corporate systems applications by developing new features, updating existing functionalities, and ensuring seamless integration with business operations to improve overall system efficiency.",
    "Developed an RPA-driven business process that automatically checked the status of all internal applications, reducing manual effort, minimizing errors, and improving response times for system maintenance.",
    "Collaborated with senior developers to design and implement an RPA-based solution that automated the quarterly budget refresh process while resolving race conditions to ensure data accuracy and process reliability."
    ];
   const kwfXp = ["Work with deep learning algorithms and AI image recognition software",
    "Train AI with datasets to recognize snow leopards for surveillance drones"];

    return (
        <div className="About">
            {/*<h1 style={{ color: "blue" }}>height: {height}</h1>*/}
           
            <Nav />
            <Container id="Content" className="Scroll">
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
                                I am a passionate Front-End Software Engineer with a deep commitment to building scalable, efficient, and user-centric applications. With expertise in designing and developing intuitive user interfaces, I focus on creating applications that seamlessly integrate with existing platforms and evolve to meet business needs. My experience spans across a wide range of industries and technologies, including cloud platforms, CI/CD, and third-party system integrations, with a strong emphasis on improving performance, system stability, and optimizing user experience.
                                </p>
                                <h2>Education</h2>
                                <p>
                                    B.S. in Computer Science New Jersey Institute of Technology
                                </p>   
                            </div>
                            <Container>
                                <h2>All Relevant Skills</h2>
                                <Row>
                                <Col>
                                {techSkills.map((skill, index) => (
                                    <h6 key={index}>{skill}</h6>
                                ))}
                                </Col>
                                <Col>
                                {softSkills.map((skill, index) => (
                                   <h6 key={index}>{skill}</h6>
                                ))}
                                </Col>
                                </Row>
                            </Container>
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
                                <h4>Vonage</h4>
                                <h5>Front End Software Engineer</h5>
                                {vonageXp.map((xp, index) => (
                                    <ul className="XpDescrip" key={index}>
                                        <li>{xp}</li>
                                    </ul>
                                ))}

                                <h4>IBM</h4>
                                <h5>Automation Test Specialist</h5>
                                {ibmXp.map((xp, index) => (
                                    <ul className="XpDescrip" key={index}>
                                        <li>{xp}</li>
                                    </ul>
                                ))}

                                <h4>Selective Insurance</h4>
                                <h5>Seasonal Support in Application Delivery</h5>
                                {selectiveXp.map((xp, index) => (
                                    <ul className="XpDescrip" key={index}>
                                        <li>{xp}</li>
                                    </ul>
                                ))}
                                <h4>Kashmir World Foundation</h4>
                                <h5>Ai Engineer-Machine Learning Intern</h5>
                                {kwfXp.map((xp, index) => (
                                    <ul className="XpDescrip" key={index}>
                                        <li>{xp}</li>
                                    </ul>
                                ))}
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