"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const page = () => {
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");
  const router=useRouter();
  const handleSubmit=async()=>{
    if(!title||!content){
      return alert("Please enter all fields")
    }
    const res=await fetch("/api/posts",{
      method:"POST",
      body:JSON.stringify({title,content}),
    })
    if(res.ok){
      router.push("/post")
    }
    else{
      alert("Failed to create post")
    }

  }
  return (
    <div className='container mt-5 d-flex justify-content-center'>
      <div className='card p-4 m-5 shadow-lg rounded-4 '  style={{width:"500px",height:"18rem"}}> 
        <h4 className='text-center mb-4 fw-bold'>Create post</h4>
      <input className='form-control rounded-3 mb-3' type="text" placeholder='Enter post title' value={title} onChange={(e)=>{
        setTitle(e.target.value)
      }}
      ></input>
      <textarea className='form-control mb-3 rounded-3 p-5' type='text' placeholder='Enter post content ' value={content} onChange={(e)=>{
        setContent(e.target.value)
      }}></textarea>
      <div className='text-center'>
        <button className='btn btn-outline-success mb-3'  onClick={handleSubmit}>Submit</button>
        <Link href="/"><button className='btn btn-outline-primary mb-3 ms-2'>Back</button></Link>
      </div>
      </div>
    </div>
  )
}

export default page

