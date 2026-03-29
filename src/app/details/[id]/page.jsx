import React from "react";
import Link from "next/link";
export const generateMetadata=async(props)=>{
const {id}=await props.params;
const res=await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
const post =await res.json();
return{
  title:post.title,
  description:post.body.slice(0,20)
}
}

const page = async (props) => {
  const { id } =await props.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card border-0 shadow-lg m-5  rounded-4 p-4" style={{ width: "20rem" }}>
        <p>{data.body}</p>
        <div className="text-center">
          <Link href="/">
            <button className="btn btn-outline-primary ms-2">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
