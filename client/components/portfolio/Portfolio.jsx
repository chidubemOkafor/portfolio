import React, { useState } from 'react';
import './Portfolio.css';
import { projects } from './projects.js';
import { ImArrowUpRight2 } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Portfolio = (prop) => {
  return (
    <div className='portfolio'>
      <div className='origin_container'>
        <div
          className={`main_container ${prop.minimize ? 'translate-out-project' : 'translate-in-project'
            }`}
        >
          <div className='project_container'>
            {projects.map((profile, index) => (
              <div key={index} className='p_container'>
                <div key={index} className='text_div'>
                  <div className='grid_view'>
                    {profile.image.map((img, index) => (<img key={index} className='image' src={img} />))}
                  </div>
                  <h3><Link className='link' to={profile.link}>
                    {profile.name} <ImArrowUpRight2 className='arrow_up' />
                  </Link>
                  </h3>
                  <p className='main_text'>{profile.description}</p>
                  <div className='stack_container'>
                    {profile.stack.map((item, index) => (
                      <div key={index} className={item == "ongoing" ? 'stacks2' : 'stacks'}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
