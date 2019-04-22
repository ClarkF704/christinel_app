import React from 'react';
import { Spring } from  'react-spring/renderprops';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import image from '../img/nature1.jpg';
import './Gallery.css';








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
        <h1 style={{ textAlign:'center', paddingTop:'100px', color: '#c5c6c7', fontFamily: 'Julius Sans One, sans-serif' }}>Gallery</h1>
          </div>

          </div>
        ) }
          </Spring>
          </div>
          </div>
          </div>
          <div className="container">
          <div className="row">
          <div className="col-lg-12">
          <Spring
            from={{ opacity:0}}
            to={{opacity: 1}}
            config={{ delay: 800, duration:1000 }}
            >
            { props => (
            <div style={props}>
            {/* Insert below */}
            <div className="picWord">
            <h3 style={{ paddingTop:'100px', color:'#66fcf1', fontFamily: 'Julius Sans One, sans-serif' }}>Familys</h3>
            <img src={image} alt="Photo" className="photo"/>
            </div>
            </div>
            ) }
          </Spring>
          </div>
          </div>
          </div>
          <div className="container">
          <div className="row">
          <div className="col-lg-12">
          <Spring
            from={{ opacity:0}}
            to={{opacity: 1}}
            config={{ delay: 800, duration:1000 }}
            >
            { props => (
            <div style={props}>
            {/* Insert below */}
            <div className="picWord">
            <h3 style={{ paddingTop:'100px', color:'#66fcf1', fontFamily: 'Julius Sans One, sans-serif' }}>Singles</h3>
            <img src={image} alt="Photo" className="photo" />
            </div>
            </div>
            ) }
          </Spring>
          </div>
          </div>
          </div>
          <div className="container">
          <div className="row">
          <div className="col-lg-12">
          <Spring
            from={{ opacity:0}}
            to={{opacity: 1}}
            config={{ delay: 800, duration:1000 }}
            >
            { props => (
            <div style={props}>
            {/* Insert below */}
            <div className="picWord">
            <h3 style={{ paddingTop:'100px', color:'#66fcf1', fontFamily: 'Julius Sans One, sans-serif' }}>Couples</h3>
            <img src={image} alt="Photo" className="photo" />
            </div>
            </div>
            ) }
          </Spring>
          </div>
          </div>
          </div>
          <div className="container">
          <div className="row">
          <div className="col-lg-12">
          <Spring
            from={{ opacity:0}}
            to={{opacity: 1}}
            config={{ delay: 800, duration:1000 }}
            >
            { props => (
            <div style={props}>
            {/* Insert below */}
            <div className="picWord">
            <h3 style={{ paddingTop:'100px', color:'#66fcf1', fontFamily: 'Julius Sans One, sans-serif' }}>Weddings</h3>
            <img src={image} alt="Photo" className="photo" />
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
        <Button variant="contained" style={{ right:'5px',  display:'inlineBlock' , backgroundColor:'#0b0c10'}}><NavLink to="/contact" style={{ color:'#c5c6c7', textAlign:'center', textDecoration:'none', fontFamily: 'Julius Sans One, sans-serif' }}>Schedule Shoot</NavLink></Button>
          </div>
          </div>
        ) }
          </Spring>
          </div>
          </div>
          </div>
          <br/>
        </div>
    );
};

export default Home;
