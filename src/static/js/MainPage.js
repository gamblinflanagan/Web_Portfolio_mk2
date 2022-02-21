import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
//import ReactGA from 'react-ga';


//import componets here
import MainComponent from "./components/MainComponent";
import AboutComponent from "./components/AboutComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import ContactComponent from "./components/ContactComponent";
import Temp from "./components/sub_components/temp";

/*
function UsePageViews() {
    
    let location = useLocation();
    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            ReactGA.initialize('G-Y6ZTK6VL9L');
            window.GA_INITIALIZED = true;
        }
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    }, [location]);
}
ReactGA.pageview(window.location.pathname + window.location.search);
*/

export default function MainPage() {

    //UsePageViews();

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

