import React from 'react'
import obj from './Data'
import { useNavigate } from 'react-router-dom'

const Fashion = () => {
  const navigate=useNavigate()
  const addtocart = (item) => {
    navigate('/Add', { state: item });
  }
  return (
    <div>
    < div className='container'>
  <div className='d-flex flex-wrap justify-content-center '>
    {obj.Fashion.map((a, index) => (
      <div key={index} className='box border mx-4 my-3 ' style={{ flex: '0 0 33.33%', maxWidth: '25.33%' }}>
        <div >
        <img className='d-flex justify-content-center'  src={a.img} height={300} width={300} alt='#' />
        <div>{a.title}</div>
        <div><h3> {a.discription}</h3></div>
        <div>Rs:{a.price}</div>
        <button className='px-3 py-2 bg-primary text-white' onClick={()=>addtocart(a)}>More Detail</button>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  )
}

export default Fashion
