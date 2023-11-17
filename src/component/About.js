import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div>
      <div className='container-fluid  height-bg'>
        <div className='bg'></div>
        <div className='mt-5'>
            <h1 className='pb-2'>Categories</h1>
            <div className='d-flex justify-content-around '>
                <div className='border'>
                  <Link to='/Watches'>
                    <img src='./Images/watch.jpeg' alt='#' height={200} width={200}></img>
                    <h4 className='pt-2 text-center'>WATCHES</h4>
                    </Link>
                </div>
                <div className='border'>
                  <Link to='/Fashion'>
                  <img src='./Images/fashion.webp' alt='#' height={200} width={200}></img>
                    <h4 className='pt-2 text-center'>FASHION</h4>
                  </Link>
                </div>
                <div className='border'>
                    <img src='./Images/utensile.webp' alt='#' height={200} width={200}></img>
                    <h4 className='pt-2 text-center'>UTENSILE</h4>
                </div>
                <div className='border'>
                    <img src='./Images/decor.jpeg' alt='#' height={200} width={200}></img>
                    <h4 className='pt-2 text-center'>DECOR</h4>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
