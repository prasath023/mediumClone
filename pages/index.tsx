import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import {sanityClient ,urlFor} from "../sanity"
import {Posts} from "../typings"
interface Props{
  posts:[Posts]
}

const Home = ({posts} :Props) => {
  console.log(posts)
  return (
    <div className=" max-w-5xl mx-auto min-h-screen ">
     <Header/>
    <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:p-0'>
      <div className='space-y-5 px-10'>
        <h1 className="text-6xl max-w-xl font-serif"><span className="underline decoration-black">Medium</span> is a place to write,read, and connect</h1>
        <h2>it is easy to post your thinkings and connect with the different minded people amonge the world
        </h2>
      </div>
      <div>
      <img className='hidden md:inline-flex h-32 lg:h-full' src='https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png'></img>

      </div>
  
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
        {posts.map((post)=>(
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className='group cursor-pointer border rounded-lg overflow-hidden'>
        <img className='w-full object-cover h-60 group-hover:scale-105 transition-transform duration-200 ease-in-out' src={urlFor(post.mainImage).url()!}  />
        <div className='flex p-5 justify-between bg-white'>
        <div>
          <p className='font-bold text-lg'>{post.title}</p>
          <p className='text-xs'>{post.author.name} </p>
        </div>
        <img className='h-12 w-12 rounded-full' src={urlFor(post.author.image).url()!}/>
        </div>
       
        </div>

          </Link>
        ))
        }

      </div>
    </div>
  )
}

export default Home;

export const getServerSideProps=async()=>{
  const query=`*[_type=="post"]{
    _id,
    slug,
    title,
    author->{
    name,
    image
  },
  mainImage,
  description
  }`;

  const posts=await sanityClient.fetch(query)

  return{
    props:{posts},
  }
}