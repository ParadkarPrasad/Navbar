import React from "react";
import {Route, Switch} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";

const App =() =>{
    return(
        <>
            <Navbar/>
            <Switch>
                <Route exact path ="/" component={About}/>
                <Route path ="/portfolio" component={Portfolio}/>
                <Route path ="/contact" component={Contact}/>
                <Route component={Error}/>
            </Switch>
        </>
    );

};
export default App;