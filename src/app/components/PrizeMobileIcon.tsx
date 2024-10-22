"use client"
import { FiGift } from "react-icons/fi";

const PrizeMobileIcon = () => {
  return (
    <div onClick={() => {console.log("eita")}} className="bg-tertiary w-[72px] h-[72px] rounded-full 
    flex justify-center items-center text-white cursor-pointer fixed left-[10%]
    bottom-[5%] z-20 lg:hidden">
      <FiGift size={50} color="#FFA323"/>
    </div>
  )
}

export default PrizeMobileIcon
