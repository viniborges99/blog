import React, { useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import "./styles-new.css"
import fechar from "../assets/xx.png"




function NewPost() {
  //const users = []
  const [users, setUsers] = useState([])
  const inputTitle = useRef()
  const textConteudo = useRef()
  const [message, setMessage] = useState("");
  const [val, setVal] = useState("");


  const handleChange = (event) => {
    const result = event.target.value.replace(/[^a-z]/gi, "");

    setMessage(result);
  };


  function addNewPost() {

    if (inputTitle.current.value === "" || textConteudo.current.value === "") {
      alert("ERROR")
    } else {
      setUsers([...users, { id: Math.random(), title: inputTitle.current.value, conteudo: textConteudo.current.value }])

      setMessage("");
    }

  }

  function deletePost(userId) {
    const newPost = users.filter(user => user.id !== userId)
    setUsers(newPost)
  }

  return (
    <div className='container'>
      <Navbar />
      <div className='containerItens'>
        <h2>Adicione um post</h2>

        <label className='conteudo'>Title</label>
        <input ref={inputTitle} placeholder='Digite seu titolo' name="message"
          type="text"
          value={message}
          onChange={handleChange} />

        <label className='conteudo'>Conteudo</label>
        <textarea ref={textConteudo} placeholder='Digite seu conteudo' type="text"
          value={val} onChange={() => setVal("")} />

        <button className='btn-b' onClick={addNewPost} >Criar post</button>
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