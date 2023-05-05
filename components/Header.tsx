import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-between max-w-5xl mx-auto p-5'>
   <div className=' flex items-center space-x-5'>
     <Link href="/">
            <img className="object-contain w-44 cursor-pointer" src="https://links.papareact.com/yvf" alt="logo"/>
        </Link>
    <div className='hidden md:inline-flex items-center space-x-5'>
       <div className=''>About</div>
       <div>Contact</div>
       <div className='text-white rounded-full bg-green-600 py-1 px-4'>Follow</div>
    </div>
   </div>

    <div className='flex items-center text-green-600 space-x-5'>
      <h3>Sign In</h3>
      <h3 className='border-green-600 py-1 px-4 border rounded-full'>Get started</h3>
    </div>
   </header>
  )
}

export default Header