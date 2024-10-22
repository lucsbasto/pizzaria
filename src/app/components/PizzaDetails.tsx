/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import { CartItem, Pizza } from "../types"
import CrustSelection from "./CrustSelection"
import SizeSelection from "./SizeSelection"
import Topping from "./Topping"


const PizzaDetails = ({ pizza, modal, setModal }: {pizza: Pizza, modal: boolean, setModal: any}) => {

  const [size, setSize] = useState('small')
  const [crust, setCrust] = useState('tradicional')
  const [additionalTopping, setAdditionalTopping] = useState([])
  const [additionalToppingPrice, setAdditionalToppingPrice] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)

  const { addToCart, setIsOpen } = useContext(CartContext)

  useEffect(() => {
    if(size === 'small'){
      const price = pizza.priceSm + additionalToppingPrice
      setPrice(price)
    }
    if(size === 'medium'){
      const price = pizza.priceMd + additionalToppingPrice
      setPrice(price)
    }
    if(size === 'large'){
      const price = pizza.priceLg + additionalToppingPrice
      setPrice(price)
    }
  }, [size, pizza.priceSm, pizza.priceMd, pizza.priceLg, additionalToppingPrice])

  useEffect(() => {
    if(additionalTopping.length > 0){
      const toppingPrice = additionalTopping.reduce((acc: any, curr: any) => {
        return acc + curr.price
      }, 0)
      setAdditionalToppingPrice(toppingPrice)
    } else {
      setAdditionalToppingPrice(0)
    }
  }, [additionalTopping])

  const handleAddCard = (item: CartItem) => {
    addToCart(item)
    setModal(false)
  }

  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8">
      <div className="lg:flex-1 flex justify-center items-center">
        <div className="max-w-[300px] lg:max-w-none mt-6 lg:mt-0">
          <Image className="mx-auto relative" src={pizza.image} alt="" width={450} height={450} priority={true}/>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex-1 p-2 text-center lg:text-left">
          <div className="flex-1 bg-white overflow-y-scroll h-[46vh] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white">
            <div className="font-semibold">
              <h2 className="capitalize text-3xl mb-1">{pizza.name}</h2>
              <div className=" mb-6 text-lg font-medium">
                <span>
                  {size === 'small' ? '25 cm' : size === 'medium' ? '30 cm' : '35 cm'}
                </span>
                <span>
                  , borda {crust}
                </span>
              </div>
            </div>
            <SizeSelection pizza={pizza} size={size} setSize={setSize}/>
            <CrustSelection crust={crust} setCrust={setCrust}/>
            <div className="mb-4 text-xl font-semibold">
              Escolha seus adicionais
            </div>
            <div className="flex flex-1 flex-wrap gap-2 py-1 justify-center lg:justify-start">
              {pizza.toppings.map((topping, index) => {
                return <Topping key={index} topping={topping} additionalTopping={additionalTopping} setAdditionalTopping={setAdditionalTopping}/>
              })
              }
            </div>
          </div>
        </div>
        <div className="h-full flex items-center px-2 lg:items-end">
          <button onClick={() => handleAddCard({id: pizza.id, image: pizza.image, name: pizza.name, price, additionalTopping, size, crust})} className="btn btn-lg gradient w-full flex justify-center gap-x-2">
            <div>Adicionar ao carrinho por</div>
            <div>R$ {price}</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PizzaDetails
