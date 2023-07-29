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
 
    console.log(passwordValue)

  const login = () => {
    axios.post("https://localhost:8000/api/autorization", {data: {password: pValue}})
    .then((response) => {
         if(response.data.message =="authorized access") {
            setToggleForm(true)
            prop.setTogglePassword(false)
         } else if (response.data.message == "invalid password") {
            // foor styling
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
    axios.add("https://localhost:8000/api/addProjects",{Headers: {autorization : pValue}},data)
    .then((response) => {
        consol
    })
    .catch((error) => { 
        console.error(error)
    })
  }
  return (
    <div>
        <div className='password_container'>
            <h4>enter a password</h4>
            <input className='text' type='text'onChange={(e) => setPvalue(e.target.value)}/>
            <button onClick>login</button>
        </div>
        {toggleForm ?
           ( <div>

                <form>
                    <input type='text' className='title' onChange={(e) => setTitle(e.target.value)}/>
                    <input type='text' className='description' onChange={(e) => setDescription(e.target.value)}/>
                    <input type='text' className='link' onChange={(e) => setLink(e.target.value)}/>
                    <input type='file' className='image' onChange={(e) => setImage(e.target.files) }/>
                </form>
            </div>) : <></>
        }
    </div>
  )
}

export default AddProject
