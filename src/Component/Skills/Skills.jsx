import React from 'react'
import './Skills.css'
import ux from '../../image/ux.jpg'
import webdesign from '../../image/webdesign.png'
import appdesign from '../../image/appdesign.png'
const Skils = () => {
  return (
    <section id="skills">
      <span className="skillstittle">What I do
      </span>
      
     <div className="skillss">
     <span className="skillsdesc">Develop user-facing features using HTML, CSS, and JavaScript.
Implement responsive design principles to ensure compatibility across multiple devices.
Create and maintain code for front-end components to improve usability </span>
     </div>
      <div className="skillsbars">
      <p className='onlypractice'>
      Few sections are only for practice purpose  

      </p>
      <div className="skillline">
          <img src={ux} alt="ui/ux" className="skilllineimg" />
          <div className="skillbartext">
            <h2>UI/UX design</h2>
            <p>This is a demo  text , you can write your own  content here</p>
          </div>

        </div><div className="skillline">
          <img src={webdesign} alt="webdesign" className="skilllineimg" />
          <div className="skillbartext">
            <h2>Website design</h2>
            <p>This demo text can be changed while making the producton ready website .</p>
          </div>
          
        </div><div className="skillline">
          <img src={appdesign} alt="appdesign" className="skilllineimg" />
          <div className="skillbartext">
            <h2>App Design</h2>
            <p>you can write text related to mobile app development</p>
          </div>
        </div>
        
       
      </div>
    </section>
  )
}

export default Skils
