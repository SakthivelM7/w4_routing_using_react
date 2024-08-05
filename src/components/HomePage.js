import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';


const HomePage = () => {
    const navigate = useNavigate();
  return (
    <div>
     <marquee><h1 className="text-center text-3xl font-bold mt-5 text-orange-600">
        React Router week four Assignment
        </h1></marquee>

 <div className="mt-40">
        <h3 className="text-2xl text-center mt-10 font-serif text-white">
         Gwc Welcome Page..!
     </h3>
     <p className="mt-7 text-center font-mono text-xl text-yellow-500">
      We ensure better services and better quality at every product you might be interested in and we shall help grow better.
     </p>
 </div>
 <div className='flex justify-center ml-80 mt-10 w-80 border-4 bg-teal-800'>
   <Link to={'/about'}></Link>
   <button onClick={() => navigate('about')} className='p-4 font-serif font-bold text-xl'>Go to About Page</button></div>
    </div>
  )
}

export default HomePage

    
  










