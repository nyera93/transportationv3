import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import app from './App'
import './index.css'
import Home from './app/Home'
import Career from './app/Career'
import Contact from './app/Contact'
import About from './app/About'
import Track from './app/Track'
import Quote from './app/Quote'
import Mechanic from './app/Mechanic'
import Administration from './app/Administration'


const App = () => (
  <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/track' component={Track} />
        <Route exact path='/about' component={About} />
        <Route exact path='/quote' component={Quote} />
        <Route exact path='/career' component={Career} />
        <Route exact path='/mechanic' component={Mechanic} />
        <Route exact path='/administration' component={Administration} />
      </div>
  </Router>
)

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'))

registerServiceWorker();
