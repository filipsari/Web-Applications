

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

const singleCountry = (props) => {
  return (
    <div> This is a single country with id: ${props.id}</div>
  )
}

function App() {
  return (
  <Fragment>  

     <Header/> 
     <Switch> 
        <Route exact path='/' component={HomePage}/> 
        <Route exact path='/countries' component={ListOfCountries}/> 
        <Route       path='/countries/:id' component={singleCountry}/> 
        <Route       path='/about' component={AboutUs}/> 
        <Route       path='/not-found' component={notFound}/>
        <Redirect from='/' to='/not-found'  />
     </Switch>

    </Fragment>
    
  );
}

export default App;
