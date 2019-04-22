import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Error from './components/Error/Error';
import Navigation from './components/Navigation/Navigation';
import bckImg from './components/img/nature1.jpg';

// for background images ===> backgroundImage: `url(${bckImg})`

class App extends Component {
 


  render() {
    return (
        <BrowserRouter>
        <div style={{ backgroundColor:'#1f2833' , height: '100%' }}>
          <Navigation />
        <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/gallery" component={Gallery}/>
        <Route component={Error} />
        </Switch>
        </div>
        </BrowserRouter>
      
    );
  }
}

export default App;
