"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const page = () => {
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const [loading,setLoading]=useState(true)
    const router =useRouter();
    const {id}=useParams();
    const getApi=async()=>{
        const res=await fetch("/api/posts")
        const data=await res.json();
        const post =data.find(elem => elem.id === +id)
        if(post){
            setTitle(post.title);
            setContent(post.content);
        }
        setLoading(false)
    }
 useEffect(()=>{
            getApi();
        },[id])
    const handelUpdate=async()=>{
        const res=await fetch('/api/posts',{
            method:"PUT",
            body:JSON.stringify({
                id: +id,
                title,
                content,
            })
        })
        if(res.ok){
            router.push("/post")
        }
        else{
            alert("Update failed")
        }

    }
  return (
    <div className='container   mt-5 d-flex justify-content-center'>
        <div className='card p-4 shadow m-5 rounded-4' style={{width:"400px"}}>
            <h3 className='text-center'>Edit</h3>
            <input type='text' className='form-control p-2 rounded-3  mb-3' value={title}
            onChange={(e)=>{
                setTitle(e.target.value)
            }}
            ></input>
            <textarea className='form-control mb-3 p-4 rounded-3' type="text" 
            value={content}
            onChange={(e)=>{
                setContent(e.target.value)
            }}></textarea>

            <div className='text-center'>
                <button className='btn  btn-outline-success ' onClick={handelUpdate}>Update</button>
               <Link href="/"><button className='btn btn-outline-primary ms-2'>Back</button></Link>
            </div>

        </div>
    </div>
  )
}

export default page
