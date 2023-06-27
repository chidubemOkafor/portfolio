import React from 'react';
import './Portfolio.css';
import { projects } from './projects.js';
import {ImArrowUpRight2} from "react-icons/im"
import {IoIosAddCircle} from "react-icons/io"

const Portfolio = (prop) => {
  return (
    <div className='origin_container'>
    <div className={`main_container ${prop.minimize ? "translate-out-project " : "translate-in-project"}`} >
      <div className='project_container'>
        {projects.map((project, index) => {
          return (
            <div key={index} className='p_container'>
              <img className='image' src={project.image}/>
              <div className='text_div'>
                <h3>{project.name} <ImArrowUpRight2 className='arrow_up'/> </h3>
                <p className='main_text'>{project.description}</p>
                <div className='stack_container'>
                {
                    project.stack.map((item, index) => (
                        <div key={index} className='stacks'>{item}</div>
                    ))
                }
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <IoIosAddCircle className='add_project'/>
    </div>
  );
};

export default Portfolio;
