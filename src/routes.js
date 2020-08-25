import React from 'react';
import {Switch,Route} from 'react-router-dom';
//Importing components

import Login from './components/login';
import Signup from './components/signup';
import Recruit from './components/recruiter';

const Routes = () =>{
    return(
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route  exact path="/signup" component={Signup}/>
        <Route  exact path="/recruiter-signup" component={Recruit}/>
    </Switch>
    )
}

export default Routes;