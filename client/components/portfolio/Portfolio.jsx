import React, { useState } from 'react';
import './Portfolio.css';
import { projects } from './projects.js';
import { ImArrowUpRight2 } from 'react-icons/im';
import { IoIosAddCircle } from 'react-icons/io';
import AddProject from '../addprojects/AddProject';

const Portfolio = (prop) => {
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <div className='portfolio'>
      <div className='origin_container'>
        <div
          className={`main_container ${
            prop.minimize ? 'translate-out-project' : 'translate-in-project'
          }`}
        >
          <div className='project_container'>
            {projects.map((project, index) => {
              return (
                <div key={index} className='p_container'>
                  <img className='image' src={project.image} alt={project.name} />
                  <div className='text_div'>
                    <h3>
                      {project.name} <ImArrowUpRight2 className='arrow_up' />{' '}
                    </h3>
                    <p className='main_text'>{project.description}</p>
                    <div className='stack_container'>
                      {project.stack.map((item, index) => (
                        <div key={index} className='stacks'>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {!togglePassword ? (
        <IoIosAddCircle
          className='add_project'
          onClick={() => setTogglePassword(!togglePassword)}
        />
      ) : (
        <></>
      )}
      {togglePassword ? <AddProject className='password_div' setTogglePassword={setTogglePassword} /> : <></>}
    </div>
  );
};

export default Portfolio;
