import blogFecth from '../axios/config'
import Navbar from '../components/Navbar'
import "./styles-new.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewPost = () => {
  const navigate=useNavigate()

  const [title,setTitle]=useState()
  const [body, setBody]= useState()

  const createPost = async (e)=>{
   
   const post = {title, body, userId:1}
   await blogFecth.post("/posts", {
    body:post,
  })
  }
  function goBackPage(){
    navigate("/")
  }






  return (
    <div>
        <Navbar/>
        <div className='new-post'>
          <h2>Insira um novo Post !</h2>
          <form onSubmit={(e)=> createPost(e)}>
            <div className="form-control">
              <label htmlFor="title">Titulo</label>
              <input type="text" name='title'id='title' placeholder='Digite o titulo' onChange={(e)=> setTitle(e.target.value)} />
            </div>
          </form>
          <form>
            <div className="form-control">
              <label htmlFor="body">Conteudo</label>
             <textarea name="body" id="body" placeholder='Digite o conteudo'
             onChange={(e)=> setBody(e.target.value)} ></textarea>
            </div>
            <input type="submit" value="Criar post" className='btn'onClick={goBackPage} />
          </form>
        </div>
        
    </div>
  )
}

export default NewPost