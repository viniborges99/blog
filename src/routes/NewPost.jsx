import React, { useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import "./styles-new.css"
import fechar from "../assets/xx.png"




function NewPost() {
  
  const [users, setUsers] = useState([])
  const [inputTitle, setInputTitle]= useState("")
  const [text, setText]= useState("")

  function addNewPost() {
    
    if (inputTitle === "" || text === "") {
      alert("OS CAMPOS NÃO FORAM PREENCHIDOS CORRETAMENTE")
    } else {
      setUsers([...users, { id: Math.random(), title: inputTitle, conteudo: text}])
    }
    
    setInputTitle("")
    setText("")
  }
  

  function deletePost(userId) {
    const newPost = users.filter(user => user.id !== userId)
    setUsers(newPost)
  }

  return (
    <div className='container'>
      <Navbar />
      <div className='containerItens'>
        <h2>Adicione um Post</h2>
        

        <label className='conteudo'>Titulo</label>
        <input value={inputTitle} onChange={(e)=> setInputTitle(e.target.value)} placeholder='Digite seu titolo' />

        <label className='conteudo'>Conteúdo</label>
        <textarea value={text} onChange={(e)=> setText(e.target.value)} placeholder='Digite seu conteudo' type="text" />

        <button className='btn-b' onClick={addNewPost} >Criar Post</button>
        <ul>
          {users.map((user) => (
            <div key={user.id}>
              <li className='containerList' >
                <label className='description'>Title<button onClick={() => deletePost(user.id)}><img src={fechar} /></button> </label>
                <p>{user.title}</p>
                <label className='description'>Post</label>
                <p>{user.conteudo}</p>
              </li>
            </div>

          ))
          }

        </ul>
      </div>
    </div>
  )
}

export default NewPost