import React, { useContext, useEffect, useState } from 'react'
import { Auth } from '../context/AuthContext'
import axios from 'axios'

const Cart = () => {
  let {user} = useContext(Auth)
  let [allCart , setAllCart] = useState([])

  let getCart = async()=>{
      let result = await axios.get(`http://localhost:3000/cart?userId=${user.id}`)
      setAllCart(result.data)
      
  }
      console.log(allCart);

  useEffect(()=>{
       getCart()
  } , [])
  return (
    <div>
      <h1>Cart</h1>
    </div>
  )
}

export default Cart
