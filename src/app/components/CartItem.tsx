/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image"
import { BiMinus, BiPlus } from "react-icons/bi"
import { IoCloseOutline } from "react-icons/io5"
import { CartItem } from "../types"

const CartItemCompoment = ({item}: {item: CartItem}) => {
  console.log(item)
  return (
    <div className="select-none mb-2">
      <div className="flex gap-x-4 mb-2">
        <div className="flex justify-center items-center">
          <Image src={item.image} width={90} height={90} alt=""/>
        </div>
        {/* pizza info */}
        <div className="flex-1 flex flex-col gap-y-1">
          <div className="text-lg capitalize font-bold">
            {item.name}
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="capitalize font-medium text-[15px]"> 
              {item.crust}
            </div>
            <div className="capitalize mb-2 font-medium text-[15px]">
              {item.size}
            </div>
            <div className="flex items-center gap-x-1">
              <div className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full"><BiMinus/></div>
              <div className="font-semibold flex flex-1 max-w-[30px] justify-center items-center text-sm">1</div>
              <div className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full"><BiPlus/></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-2xl flex justify-center items-center self-end cursor-pointer hover:scale-110 transition-all text-orange">
            <IoCloseOutline/>
          </div>
          <div>
            <span className="text-[17px] font-medium font-robotoCondensed">
              R$ {parseFloat(item.price * item.amount).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 p-6 border-b border-black/10">
        <div className="font-semibold">
          Toppings: {item.additionalTopping.length === 0  && 'None'}
        </div>
        {
          item.additionalTopping.map((topping, index) => {
            return <div className="capitalize text-sm gradient font-medium px-3 py-1 rounded-full leading-none" key={index}>{topping.name}</div>
          })
        }
      </div>
    </div>
  )
}

export default CartItemCompoment
