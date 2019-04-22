import React from 'react';
import Photo from './mock.jpg';
import { Spring } from  'react-spring/renderprops';

const About = () => {
    return(
        <div>
            <div className="container">
            <div className="row">
            <div className="col-lg-6">
            <Spring
                from={{ opacity:0}}
                to={{opacity: 1}}
                config={{ delay: 300, duration:1000 }}
                >
                { props => (
                <div style={props}>
                {/* Insert below */}
        <div>
        <h1 style={{ color:'#66fcf1', fontFamily: 'Julius Sans One, sans-serif', paddingTop:'20px' }}>The Photographer</h1>
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
                config={{ delay: 400, duration:1000 }}
                >
                { props => (
                <div style={props}>
                {/* Insert below */}
        <div>
        <img src={Photo} style={{ width:'300px', height:'auto', borderRadius: '50%', paddingTop:'20px' }}/>
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
                config={{ delay: 500, duration:1000 }}
                >
                { props => (
                <div style={props}>
                {/* Insert below */}
        <div>
        <p style={{ fontSize:'20px', color:'#c5c6c7', paddingTop:'20px' }}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
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
            <br/>
            <br/>
            <br/>
            <br/>
            
        </div>
    );
};

export default About;
