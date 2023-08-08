import React,{useState} from 'react'
import axios from "axios"
import "./addProject.css"
import isUrl from "is-url"

const AddProject = (prop) => {
    const [pValue, setPvalue] = useState("")
    const [password, setPassword] = useState("")
    const [toggleForm, setToggleForm] = useState(false)

    // 
    const [error, setError] = useState("")
    const [messageSuccess, setMessageSuccess] = useState("")
    const [link, setLink] = useState("")
    const [realLink, setRealLink] = useState("")
   const [linkerror, setLinkError] = useState("")
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

  const login = () => {
    axios.post("http://localhost:8000/api/authorization", {password: pValue})
    .then((response) => {
         if(response.data.message =="authorized access") {
            setToggleForm(true)
         } else if (response.data.message == "invalid password") {
            setError(response.data.message)
            console.log(response.data.message)
         }
    })
    .catch((error) => {
        console.error(error)
    })
  }

  const add = () => {
   if(isUrl(link)) {
    setRealLink(link)
    const data = {
        image: image,
        link: realLink,
        title: title,
        descriptions: description,
      };
  
    axios
      .post("http://localhost:8000/api/addProjects", data, {
        headers: {
          authorization: pValue,
        },
      })
      .then((response) => {
        setToggleForm(true)
        setMessageSuccess(response.data.message)
        setTimeout(() => {
           setMessageSuccess("")
        },4000)
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
    }else {
        setLinkError("this is not a link")
        setTimeout(() => {
            setLinkError("")
        },2000)
        return true
    }
  };
  
  return (
    <>
{!toggleForm ? <div className='main_project_div'>
        <div className='password_container'>
            <h4>enter a password</h4>
            <input className='text' type='password'onChange={(e) => setPvalue(e.target.value)}/>
            <div>{error}</div>
            <button  onClick={login}>login</button>
        </div>
    </div> :
   
           ( 
            <div className='projects_for_container'>
                <form>
                    <div className=''>
                    <label>Title</label><br/>
                    <input type='text' placeholder= "bitcoin clone" className='title' onChange={(e) => setTitle(e.target.value)}/><br/>
                    <label>Description</label><br/>
                    <input type='text' placeholder='what your project is about' className='description' onChange={(e) => setDescription(e.target.value)}/><br/>
                    <label>Link</label><br/>
                    <input type='text' placeholder= "link to project" className='link' onChange={(e) => setLink(e.target.value)}/><br/>
                    <div>{linkerror}</div>
                    <label>Image</label><br/>
                    <input type='file' placeholder="image of project" className='image' onChange={(e) => setImage(e.target.value)} accept="image/png, image/jpeg"/><br/>
                    <div>{messageSuccess}</div>
                    </div>
                    <div>

                    </div>
                </form>
                <button onClick={add}>Add Project</button>
            </div>
            ) 
        }
    </>
  )
}

export default AddProject
