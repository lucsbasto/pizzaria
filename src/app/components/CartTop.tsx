import { useContext } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { CartContext } from "../context/CartContext"

const CartTop = () => {
  const { setIsOpen } = useContext(CartContext)
  return (
    <div className="w-full h-20 border-b flex items-center justify-between px-10">
      <div className="font-semibold">Carrinho de Compras (3)</div>
      <div onClick={() => setIsOpen(false)} className="cursor-pointer group">
        <IoCloseOutline className="text-3xl group-hover:scale-110 duration-300 transition-all"/>
      </div>
    </div>
  )
}

export default CartTop
