import React from 'react';
import '../styles/about.css';
import naruto from '../assets/ace.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h2>About mosaicmagic</h2>
        <div>
          <div className="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
          </div>
          <Link id='btn' to='/Sunacchii-react/account'><button className='btn'>
              sign up
          </button></Link>
        </div>
      </div>
      <div className="about-right">
        <img src={naruto} alt="" />
      </div>
    </div>
  )
}
export default About;