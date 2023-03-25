import { useState, useEffect } from 'react'
import blogFecth from "../axios/config"
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/index'
import "./styles-home.css"


const Home = () => {
    const [posts, setPosts] = useState([])//post vira o array vazio e o setpost tem o poder de modificar

    const getPost = async()=>{
        try {
            const response = await blogFecth.get("/posts")

            const data = response.data
            setPosts(data)
        } catch (error) {
            console.log("error")
        }
    }

    useEffect(()=>{
        getPost()
    }, [])



  return (

    <div>
        <Navbar/>
        <div className='home'>
            <h1 >Ultimos posts</h1>
            {posts.length === 0 ?<p>Carregando....</p> :(
                posts.map((post)=>(
                    <div className="post" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`/posts/${post.id}`} className="btn">Ler mais</Link>
                    </div>
                ))
            )}
        </div>
    </div>
  )
}

export default Home