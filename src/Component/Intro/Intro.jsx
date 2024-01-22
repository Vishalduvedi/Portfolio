import React from 'react';
import './Intro.css';
import gym from '../../image/portfolio.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introcontent">
                <span className="hello">Hello</span><br/>
                <span className='introtext'>I'm <span className="introname">Vishal</span><br /> Front End Developer</span><br/>
                <p className="introaboutme">I am a skilled web developer  </p>
               
                <Link><button className='introbtn'>Hire me</button></Link>
            </div>

                    <img src={gym} alt="gym" className="gym" />

        </section>
    )
}

export default Intro;
