

import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import { Fragment } from 'react';
import { Header } from './Header/Header';
import {HomePage} from './HomePage/HomePage';
import {AboutUs} from './AboutUs/AboutUs';
import { ListOfCountries } from './ListOfCountires/ListOfCountries';


const notFound = () => (
  <img src="https://kbimages.dreamhosters.com/images/Site_Not_Found_Dreambot.fw.png"></img>
)

function App() {
  return (
  <Fragment>  

     <Header/> 
     <Switch> 
        <Route exact path='/' component={HomePage}/> 
        <Route       path='/countries' component={ListOfCountries}/> 
        <Route       path='/about' component={AboutUs}/> 
        <Route       path='/not-found' component={notFound}/>
        <Redirect from='/' to='/not-found'  />
     </Switch>

    </Fragment>
    
  );
}

export default App;
