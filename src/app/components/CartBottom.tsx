import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartBottom = () => {
  const { cart } = useContext(CartContext)
  return (
    <>
      {cart.length >= 1 ? (
        <div className="px-6 py-3 lg:py-6 mt-auto">
          <div className="flex items-center justify-between mb-6 text-lg font-semibold font-robotoCondensed">
            <div>Total:</div>
            <div>R$ 320</div>
          </div>
          <div className="flex flex-col gap-y-3">
            <button className="btn btn-lg gradient font-semibold flex justify-center">Checkout</button>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 w-full h-full flex justify-center items-center -z-10">
          <div className="font-semibold">Your cart is empty</div>
        </div>
      )}
    </>
  )
}

export default CartBottom