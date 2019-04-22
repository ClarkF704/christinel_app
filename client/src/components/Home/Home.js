import React from 'react';
import { Spring } from  'react-spring/renderprops';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';









const Home = () => {
    return(
        <div>
            <div className="container">
            <div className="row">
            <div className="col-lg-12">
            <Spring
        from={{ opacity:0}}
        to={{opacity: 1}}
        config={{ delay: 200, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <div>
        <h3 style={{ textAlign:'center', paddingTop:'100px', color: '#c5c6c7', fontFamily: 'Julius Sans One, sans-serif' }}>Welcome to</h3>
          </div>

          </div>
        ) }
          </Spring>

          <Spring
        from={{ opacity:0}}
        to={{opacity: 1}}
        config={{ delay: 800, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <div>
        <h1 style={{ textAlign:'center', paddingTop:'100px', color:'#66fcf1', fontFamily: 'Julius Sans One, sans-serif' }}>Christine Photography</h1>
          </div>
          </div>
        ) }
          </Spring>
          </div>
          
          </div>
          </div>
          <div className="container">
          <div className="row" style={{ paddingTop:'150px' }}>
          <div className="col-lg-12">
           <Spring
        from={{ opacity:0}}
        to={{opacity: 1}}
        config={{ delay: 1000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <div style={{textAlign:'center'}}>
        <Button variant="contained" style={{ right:'5px',  display:'inlineBlock' , backgroundColor:'#0b0c10'}}><NavLink to="/contact" style={{ color:'#c5c6c7', textAlign:'center', textDecoration:'none', fontFamily: 'Julius Sans One, sans-serif' }}>Contact</NavLink></Button>
        <Button variant="contained" style={{left:'5px',  display:'inlineBlock', backgroundColor:'#0b0c10' }}><NavLink to="/about" style={{ color:'#c5c6c7', textAlign:'center', textDecoration:'none', fontFamily: 'Julius Sans One, sans-serif' }}>Learn More</NavLink></Button>
          </div>
          </div>
        ) }
          </Spring>
          </div>
          </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
    );
};

export default Home;
