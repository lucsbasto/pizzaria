/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image"
import { useEffect, useState } from "react"
import { IoMdCheckmark } from "react-icons/io"
import { Topping } from "../types"

const ToppingComponent = ({ topping, additionalTopping, setAdditionalTopping }: {topping: Topping, additionalTopping: Topping[], setAdditionalTopping: any}) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckBox = () => {
    setIsChecked(!isChecked)
  }

  const handleTopping = () => {
    if(isChecked){
      const newToppings = new Set([...additionalTopping, {...topping}])
      setAdditionalTopping(Array.from(newToppings))
    } else {
      const newToppings = additionalTopping?.filter(toppingItem => {
        return toppingItem.name !== topping.name
      })
      setAdditionalTopping([...newToppings])
    }
  }

  useEffect(() => {
    handleTopping()
  }, [isChecked])
  return (
    <div className={`
      ${isChecked && 'border-orange'} 
    w-full max-w-[110px] h-[140px] p-1 flex 
    flex-col items-center justify-center border rounded-md bg-white relative`}>
      <Image src={topping.image} width={70} height={70} alt='' priority={true} className="mb-2"/>
      <div className="text-sm capitalize text-center font-medium">
        {topping.name}  
      </div>
      <input className="absolute w-full h-full opacity-0 cursor-pointer" type="checkbox"  checked={isChecked} onChange={handleCheckBox}/>
      <div className={`${isChecked ? 'opacity-100': 'opacity-0'} absolute top-1 right-1`}>
        <IoMdCheckmark className="text-xl text-orange"/>
      </div>
    </div>
  )
}

export default ToppingComponent
