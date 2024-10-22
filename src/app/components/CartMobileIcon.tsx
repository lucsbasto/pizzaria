"use client"
import { useContext } from "react"
import { FaCartShopping } from "react-icons/fa6"
import { CartContext } from "../context/CartContext"

const CartMobileIcon = () => {
  const { isOpen, setIsOpen, cart } = useContext(CartContext)
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="bg-tertiary w-[72px] h-[72px] rounded-full 
    flex justify-center items-center text-white cursor-pointer fixed right-[10%]
    bottom-[5%] z-20 lg:hidden">
      <FaCartShopping className="text-4xl" color="#FFA323"/>
      <span className="absolute text-white top-3 right-3 gradient w-5 h-5 flex justify-center items-center rounded-full font-robotoCondensed text-[13px]">{cart.length}</span>
    </div>
  )
}

export default CartMobileIcon
