import { NextResponse } from "next/server"

let post =([]);

export const POST=async(req)=>{
    const body=await req.json();
    const newPost ={
        id:post.length +1,
        title:body.title,
        content:body.content
    }
    post.push(newPost)
return NextResponse.json(newPost);
}
export const GET=async()=>{
return NextResponse.json(post)
}


export const DELETE=async(req)=>{
 const {searchParams}=new URL(req.url);
 const id= searchParams.get('id');
const posts=post.filter((elem)=> elem.id !== id)
 return NextResponse.json(posts)

}
export const PUT=async(req)=>{
 const body =await req.json();
 const data=post.findIndex( (elem )=>
    elem.id === body.id);
 post[data]={
    ...post[data],
    title:body.title,
    content:body.content,
 }
 return NextResponse.json(post[data])
}