"use client"

import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartBottom from "./CartBottom"
import CartItem from "./CartItem"
import CartTop from "./CartTop"

const CartMobile = () => {
  const { isOpen, cart } = useContext(CartContext)
  return (
    <div className={`${isOpen ? 'bottom-0' : '-bottom-full'} bg-white fixed w-full h-full left-0 z-20 transition-all duration-300 lg:hidden flex flex-col`}>
      <CartTop/>
      <div className={`px-4 flex-col gap-y-4 py-2 mr-4 mt-8 h-[60vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary ${cart.length >= 3 ? 'scrollbar-track-white/10' : 'scrollbar-track-transparent'}`}>
        {cart?.map((item, index) => {
          return  <CartItem key={index} item={item}/>
        })}
      </div>
      <CartBottom/>
    </div>
  )
}

export default CartMobile
