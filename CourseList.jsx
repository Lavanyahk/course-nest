import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Course from './Course'

const CourseList = () => {
  const [allCourses, setAllCourses] = useState([])

  const getCourses = async () => {
    const res = await axios.get('http://localhost:3000/courses')
    setAllCourses(res.data)
  }
let deleteCourse = (id)=>{
  axios.delete(`http://localhost:3000/courses/${id}`)
 
}

  useEffect(() => {
    getCourses()
  }, [deleteCourse])

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-wrap justify-center gap-8">
        {allCourses.map((el) => (
          <Course {...el} key={el.cid} onDelete={deleteCourse} />
        ))}
      </div>
    </div>
  )
}

export default CourseList
