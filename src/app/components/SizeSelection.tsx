/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image"
import { Pizza } from "../types"

const SizeSelection = ({ pizza, size, setSize }: {pizza: Pizza, size: string, setSize: any}) => {

  return (
    <div className="bg-white mx-auto max-w-sm lg:max-w-none flex items-center justify-center lg:justify-start">
      <div className="flex gap-x-12 items-baseline mb-10 font-medium justify-evenly">
        <label className="flex flex-col items-center gap-x-2 cursor-pointer">
          <Image className={`${size === 'small' ? 'border-2 border-orange p-[2px] rounded-full': 'border-transparent filter saturate-[.1]'} mb-2`} src={pizza.image} width={60} height={60} alt="" priority={true}/>
          <input 
            type="radio" 
            name='size' 
            value='small'  
            checked={size === 'small'} 
            onChange={e => setSize(e.target.value)}
            className="appearance-none"
          />
          Pequena
        </label>
        <label className=" flex flex-col items-center gap-x-2 cursor-pointer">
          <Image className={`${size === 'medium' ? 'border-2 border-orange p-[2px] rounded-full': 'border-transparent filter saturate-[.1]'} mb-2`} src={pizza.image} width={70} height={70} alt="" priority={true}/>
          <input 
            type="radio" 
            name='size' 
            value='medium'  
            checked={size === 'medium'} 
            onChange={e => setSize(e.target.value)}
            className="appearance-none"
          />
          Média
        </label>
        <label className=" flex flex-col items-center gap-x-2 cursor-pointer">
          <Image className={`${size === 'large' ? 'border-2 border-orange p-[2px] rounded-full': 'border-transparent filter saturate-[.1]'}  mb-2`} src={pizza.image} width={80} height={80} alt="" priority={true}/>
          <input 
            type="radio" 
            name='size' 
            value='large'  
            checked={size === 'large'} 
            onChange={e => setSize(e.target.value)}
            className="appearance-none"
          />
          Grande
        </label>
      </div>
    </div>
  )
}

export default SizeSelection
