import axios from 'axios'
import React, { useState } from 'react'

export const CreateTodo = (props) => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")


  return (
    <div className='flex flex-col max-w-[1080px] items-center justify-center mx-auto'>
      <input type="text" placeholder='title' onChange={function(e){
        const value = e.target.value;
        setTitle(e.target.value)
      }}
      className='border border-black p-2 m-2 rounded-md'/>
      <input type="text" placeholder='description' onChange={function(e){
        const value = e.target.value;
        setDescription(e.target.value)
      }}
      className='border border-black p-2 m-2 rounded-md'/>
      <button 
      className='border border-black rounded-full p-2 bg-blue-500 hover:bg-blue-700 text-white'
      onClick={() => {
        
        fetch("http://localhost:3000/todo", {
          method:"POST",
          body:JSON.stringify({
            title:title,
            description:description
          }),
          headers:{
            "Content-type":"application/json",
            // "Content-length":0
          }
        })
        .then(async function(res){
          console.log(res)
          const json = await res.json();
          alert("Todo added ")
        })
      }}
      >Add a Todo</button>
      
    </div>
  )
}
