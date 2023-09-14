"use client"
import React, { useState } from "react";

const page = () =>{
  const [todo1, settodo1] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])

  const submithandler = (e)=>{
      e.preventDefault()
      // console.log(todo1)
      // console.log(desc)
      setmaintask([...maintask, {todo1, desc}])
      settodo1("")
      setdesc("")
  }

  const deletehandler = (i)=>{
        let copytask = [...maintask]
        copytask.splice(i,1)
        setmaintask(copytask)
  }
  let renderTask = <h2>No Todo's Available</h2>


  if (maintask.length>0) {
    renderTask = maintask.map((t,i)=>{
      return (<li key={i} className="flex items-center justify-between mb-8">
        <div className="mb-5 flex items-center justify-between w-2/3">
                  <h5 className="text-2xl font-semibold">{t.todo1}</h5>
                  <h6 className="text- xl font-semibold">{t.descm}</h6>
        </div>
        <button 
        onClick={()=>{
          deletehandler(i)
        }}
        className="bg-orange-400 text-yellow-300 px-4 py-2 rounded font-bold">
          Delete
        </button>
      </li>);
    });
    
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-yellow-500 text-center bg-black p-5">My Todo's</h1>
      <form onSubmit={submithandler}>

      

        <input className="text-2xl  border-red-400 border-4 m-5 px-4 py-2" 
        type="text" 
        placeholder="Enter your todo"
        value={todo1}
        onChange={(e)=>{
          settodo1(e.target.value)
        }}
        />

        <input className="text-2xl  border-red-400 border-4 m-5 px-4 py-2" 
        type="text" 
        placeholder="Enter your todo's description"
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value) 
        }}
        />


        <button className="bg-black text-green-500 px-6 py-4 font-bold rounded m-5">My Task</button>

      </form>

      <hr />

      <div className="p-9 bg-slate-500 ">
            <ul>
              {renderTask}
            </ul>
      </div>
      
    </>
  )
}

export default page