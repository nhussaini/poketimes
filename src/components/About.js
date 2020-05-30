import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About =()=>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>lorem epsom is a bunch of dummy texts used for beginners</p>
        </div>
    );
}
export default Rainbow(About);