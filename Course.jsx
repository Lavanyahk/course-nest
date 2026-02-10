import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Auth } from '../context/AuthContext'
import { CartData } from '../context/CartContext'

const Course = (props) => {
  let {
  cname,
  course_image,
  course_fee,
  course_duration,
  course_author,
  id,
  onDelete
} = props;

  let {user} = useContext(Auth)
 let {addToCart , cart} = useContext(CartData)
  return (
    <div className="flex width: 280px; flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Image */}
      <img
        src={course_image}
        alt={cname}
        className="h-44 w-full object-cover"
      />

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 text-lg font-semibold text-gray-800">
          {cname}
        </h3>

        <p className="text-sm text-gray-500">
          By {course_author}
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Duration: {course_duration}
        </p>

        {/* Push footer to bottom */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-bold text-blue-600">
            ₹{course_fee}
          </span>

        
        {user.role === 'admin' ? (
  <div className="flex gap-2">
    <NavLink
      to={`/update/${id}`}
      className="rounded-md border border-blue-600 px-3 py-1.5 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
    >
      Update
    </NavLink>

    <button onClick={()=>onDelete(id)}
      className="rounded-md border border-red-600 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-600 hover:text-white"
    >
      Delete
    </button>
  </div>
) : (
 <>
  <button className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700">
    View
  </button>
  <button onClick={()=>addToCart(props)} className="rounded-md bg-green-600 px-3 py-1.5 text-sm text-white hover:bg-green-700">
    Add to Cart
    </button>
 
 </>
)}


        </div>
      </div>

    </div>
  )
}

export default Course

