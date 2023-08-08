import React, { useState ,useEffect} from 'react';
import './Portfolio.css';
import { projects } from './projects.js';
import { ImArrowUpRight2 } from 'react-icons/im';
import { IoIosAddCircle } from 'react-icons/io';
import Base64Image from './Base64Image';
import AddProject from '../addprojects/AddProject';
import axios from 'axios';

const Portfolio = (prop) => {
  const [data, setData] = useState([])

  const [togglePassword, setTogglePassword] = useState(false);

  useEffect(() => {
     const fetchData = async () => {
      try{
        const response = await axios.get("http://localhost:8000/api/getProjects")
        setData(response.data)
      }
      catch(error) {
        console.error(error)
      }
    }
    fetchData()
  },[])

  const convertImage = (image) => {

    return
  }

console.log(data)

  return (
    <div className='portfolio'>
      <div className='origin_container'>
        <div
          className={`main_container ${
            prop.minimize ? 'translate-out-project' : 'translate-in-project'
          }`}
        >
          <div className='project_container'>
          {data?.map((d) => (
                <div key={d.id} className='p_container'>
                  <Base64Image base64String= {d.image.data} />
                  <div className='text_div'>
                    <h3>
                      {d.title} <ImArrowUpRight2 className='arrow_up' />{' '}
                    </h3>
                    <p className='main_text'>{d.descriptions}</p>
                    <div className='stack_container'>
                      {/* {project.stack.map((item, index) => (
                        <div key={index} className='stacks'>
                          {item}
                        </div>
                      ))} */}
                    </div>
                  </div>
                </div>
              ))}
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
