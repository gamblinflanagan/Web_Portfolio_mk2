import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container, Row, Col, Button } from 'react-bootstrap';


//import componets here
import MainComponent from "./components/MainComponent";
import AboutComponent from "./components/AboutComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import ContactComponent from "./components/ContactComponent";
import Temp from "./components/sub_components/temp";


export default function MainPage() {

    return (
        <Router>
            <Switch>
                <Route exact path="/"><MainComponent /></Route>
                <Route exact path="/about"><AboutComponent /></Route>
                <Route exact path="/projects"><ProjectsComponent /></Route>
                <Route exact path="/contact"><ContactComponent /></Route>
                <Route exact path="/temp"><Temp /></Route>
            </Switch>
        </Router>
    );
}

