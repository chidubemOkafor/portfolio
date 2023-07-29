import React,{useState} from 'react'
import axios from "axios"
import "./addProject.css"

const AddProject = () => {
    const [passwordValue, setPasswordValue] = useState("")
    console.log(passwordValue)

  const login = () => {
    axios.post("https://localhost:8000/api/autorization", {data: {password: passwordValue}}
    .then((response) => {
   
    }))
  }
        

  return (
    <div>
        <div className='password_container'>
            <h4>enter a password</h4>
            <input className='text' type='text'onChange={(e) => setPasswordValue(e.target.value)}/>
        </div>
        {
            <div>

                <form>
                    <input type='text' className='title'/>
                    <input type='text' className='description'/>
                    <input type='text' className='link'/>
                    <input type='file' className='image'/>
                    
                </form>
            </div>
        }
    </div>
  )
}

export default AddProject
