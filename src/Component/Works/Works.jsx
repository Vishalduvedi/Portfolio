import React from 'react'
import './Works.css'
import anime from '../../image/Screenshot (2).png'
import cat from'../../image/Screenshot (3).png'
import dog from '../../image/Screenshot (4).png'
import girl from '../../image/Screenshot (5).png'
import men from '../../image/Screenshot (6).png'
import rabit from '../../image/Screenshot (7).png'
const Works = () => {
  return (
  <section id="work">
    <h2 className="workstittle">My Protfile</h2>
    <span className='worksdesc'>Welcome to my javascript project section under react project named as my portfolio here is some pictures related to my project</span>
    <div className="worksimgs">
        <img src={anime} alt="anime" className="worksimg" />
        <img src={cat} alt="cat" className="worksimg" />
        <img src={dog} alt="dog" className="worksimg" />
        <img src={girl} alt="girl" className="worksimg" />
        <img src={men} alt="men" className="worksimg" />
        <img src={rabit} alt="rabit" className="worksimg" />
    </div>
    <button className="worksbtn">See More</button>
  </section>
  )
}

export default Works
