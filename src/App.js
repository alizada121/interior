import React, {  Fragment, Suspense } from "react";
import {Route,Switch,Redirect} from "react-router-dom"
import Advantages from './Advantages/Advantages';
import './App.css';
import Team from './Team/Team';
import Form from './Form/Form';
import Header from './header/Header';
import Portfolio from './portfolio/Portfolio';
import Services from './Services/Services';
import SliderPage from './slider-page/SliderPage';
import Project from './Project/Project';
import Map from './Map/Map';
import PortfolioPage from "./PortfolioPage/PortfolioPage";
import ServicesPage from "./ServicesPage/ServicesPage";

import Team4 from "./Team4/Team4";




function App() {
  return (

    <Fragment>
      <Switch>
          <Route exact path="/">
                  <Header/>   
                  <SliderPage/>
                  <Portfolio/>
                  <Form/>
                  <Team/>
                  <Advantages/>
                  <Services/>
                  <Project/>
                  <Map/>
          </Route>

        <Route exact path="/portfolio" >
            <PortfolioPage />
          </Route>

            <Route exact path="/services" >
              <ServicesPage />
            </Route>
      </Switch>
    </Fragment>
   
      
    
    
     
   
  );
}

export default App;
