import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg bg-dark px-4 fixed-top'>
      <div className='container-fluid'>
        <Link className='text-decoration-none text-white ms-2' href="/"><h4>Blog</h4></Link>
        <div>
            <Link className='text-white text-decoration-none me-2' href="/post">Post</Link>
          <Link className='text-white text-decoration-none ' href="/create">Create</Link>
        </div>
        </div>
      
    </div>
  )
}

export default Navbar
