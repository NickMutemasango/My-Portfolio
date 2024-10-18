import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



const Projects = (props) => {
  return (
    <div className='flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-5'>
      <div className='bg-gray opacity-[75%] relative'>
        <Image src={props.image} alt='image'width={2000} height={2000}/>
        <Link href={`${props.link}`}><button className='absolute bottom-2 left-3 bg-white text-black rounded-xl text-xs px-4 py-1'>Visit Project</button></Link>
      </div>
    </div>
  )
}

export default Projects