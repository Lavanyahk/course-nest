import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    // console.log(props);
    let {user} = useContext(Auth)
    console.log(user);
   if(! user){
    return <Navigate to='/login' replace />
   }else{
    return children;
   }
}

export default ProtectedRoutes



//  db.json
// {
//   "users": [
//     {
//       "username": "admin",
//       "email": "admin@gmail.com",
//       "password": "admin@123",
//       "role": "admin",
//       "id": "85b5"
//     },
//     {
//       "id": "7d6e8a35-03a3-48b4-a08a-68eecc87e380",
//       "username": "Akshay",
//       "email": "a@gmail.com",
//       "password": "a@123",
//       "confirmPassword": "a@123",
//       "role": "user"
//     },
//     {
//       "id": "5995f27f-4073-4ae9-aff0-01feab856554",
//       "username": "NewUser",
//       "email": "newUser@gmail.com",
//       "password": "new@12345",
//       "confirmPassword": "new@12345"
//     }
//   ],
//   "courses": [
//     {
//       "id": "101a",
//       "cname": "full stack",
//       "course_image": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210215160315/FREE-Python-Course-For-Beginners.png",
//       "course_fee": 30000,
//       "course_duration": "6 months",
//       "course_author": "Rajesh Sir"
//     },
//     {
//       "cname": "Java full stack",
//       "course_image": "https://www.coursesxpert.com/wp-content/uploads/2021/01/Java-Course.jpg",
//       "course_fee": 30000,
//       "course_duration": "6 months",
//       "course_author": "Keshav Sir",
//       "id": "24ce"
//     },
//     {
//       "cname": "Mern full stack",
//       "course_image": "https://tse1.mm.bing.net/th/id/OIP.kUcrjifpGcJVPD01rZFzTwHaEP?cb=ucfimg2&ucfimg=1&w=1300&h=744&rs=1&pid=ImgDetMain&o=7&rm=3",
//       "course_fee": 35000,
//       "course_duration": "4 months",
//       "course_author": "Srinivasa Sir",
//       "id": "bcde"
//     },
//     {
//       "id": "455b",
//       "cname": "Devops Course Jspiders",
//       "course_image": "https://media.geeksforgeeks.org/wp-content/uploads/20230410112114/DevOps.png",
//       "course_fee": "30000",
//       "course_duration": "6 months",
//       "course_author": "Preran Sir"
//     },
//     {
//       "cid": "6dc1a2c6-9600-4935-aa19-230de8fbf39b",
//       "cname": "ReactJs  Course By Jspiders",
//       "course_image": "https://tse3.mm.bing.net/th/id/OIP.ALEiMvuR7IQDglvydYZSQgHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
//       "course_fee": "3000",
//       "course_duration": "1 month",
//       "course_author": "Akshay",
//       "id": "1842"
//     },
//     {
//       "id": "a1e7",
//       "cname": "JDBC / Servlet Course",
//       "course_image": "https://www.devopsschool.com/blog/wp-content/uploads/2023/12/image-168.png",
//       "course_fee": "4000",
//       "course_duration": "1",
//       "course_author": "Anugraha Mam"
//     },
//     {
//       "id": "265b1d2c-f4e8-4e2c-a3cd-6ff0ed08afaa",
//       "cname": "flask",
//       "course_image": "https://kanhasoft.com/blog/wp-content/uploads/2018/07/django.jpg",
//       "course_fee": "20000",
//       "course_duration": "5 weeks",
//       "course_author": "Akshay"
//     }
//   ],
//   "cart": []
// }
