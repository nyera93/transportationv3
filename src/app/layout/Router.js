import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../Home'
import Career from './../Career'
import CareerPage from './../career/CareerPage'
import Contact from './../Contact'
import About from './../About'
import Track from './../Track'
import Quote from './../Quote'
import Mechanic from './../Mechanic'
import Administration from './../Administration'
const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/career' component={Career}/>
    <Route path='/career/:CareerPage' component={CareerPage}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/track' component={Track}/>
    <Route exact path='/quote' component={Quote}/>
    <Route exact path='/mechanic' component={Mechanic}/>
    <Route exact path='/administration' component={Administration}/>
  </Switch>
)
export default Router
