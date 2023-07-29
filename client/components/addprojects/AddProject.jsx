import React,{useState} from 'react'
import axios from "axios"
import "./addProject.css"

const AddProject = (prop) => {
    const [pValue, setPvalue] = useState("")
    const [password, setPassword] = useState("")
    const [toggleForm, setToggleForm] = useState(false)

    // 
    const [image, setImage] = useState("")
    const [link, setLink] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
 

  const login = () => {
    axios.post("http://localhost:8000/api/authorization", {password: pValue})
    .then((response) => {
         if(response.data.message =="authorized access") {
            setToggleForm(true)
            prop.setTogglePassword(false)
         } else if (response.data.message == "invalid password") {
            console.log(response.data.message)
         }
    })
    .catch((error) => {
        console.error(error)
    })
  }

  const data = {
    image: image, 
    link: link, 
    title: title, 
    descriptions: description
  }
        
  const add = () => {
    axios.add("http://localhost:8000/api/addProjects",{Headers: {autorization : pValue}},data)
    .then((response) => {
        consol
    })
    .catch((error) => { 
        console.error(error)
    })
  }
  return (
    <>
    <div className='main_project_div'>
        <div className='password_container'>
            <h4>enter a password</h4>
            <input className='text' type='password'onChange={(e) => setPvalue(e.target.value)}/>
            <button  onClick={login}>login</button>
        </div>
    </div>
    {toggleForm ?
           ( 
            <div>
                <form>
                    <input type='text' className='title' onChange={(e) => setTitle(e.target.value)}/>
                    <input type='text' className='description' onChange={(e) => setDescription(e.target.value)}/>
                    <input type='text' className='link' onChange={(e) => setLink(e.target.value)}/>
                    <input type='file' className='image' onChange={(e) => setImage(e.target.files) }/>
                </form>
            </div>
            ) : <></>
        }
    </>
  )
}

export default AddProject
