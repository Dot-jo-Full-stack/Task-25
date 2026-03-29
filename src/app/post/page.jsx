"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const page = () => {
  const [post, setPost] = useState([]);
  const getApi = async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPost(data);
  };
  useEffect(() => {
    getApi();
  }, []);
  const handelDelete = async (id) => {
    await fetch(`/api/posts?id=${id}`, { method: "DELETE" });
    setPost(post.filter((elem) => elem.id !== id));
  };
  return (
    <div className="container mt-5">
      <h1>Post</h1>
      <div className="row">
        {post.map((elem) => {
          return (
            <div key={elem.id} className="card border-0 shadow rounded-3 p-4 mb-2">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold mb-2">{elem.title}</h5>
                  <p className="text-muted text-dark">{elem.content}</p>
                </div>
                <div className="d-flex gap-2">
                  <button
                    onClick={() => handelDelete(elem.id)}
                    className="btn btn-outline-danger"
                  >
                    🗑️
                  </button>
                  <Link href={`/edit/${elem.id}`}>
                    <button className="btn btn-outline-success ">✍️</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
        <div>
          <Link href="/create">
            <button className="btn btn-primary mt-3">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
