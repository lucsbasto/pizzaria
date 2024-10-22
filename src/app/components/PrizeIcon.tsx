"use client"
import { FiGift } from "react-icons/fi";

const Prize = () => {
  return (
    <div className="hidden lg:flex items-center cursor-pointer sm:" onClick={() => {console.log('sorteiooooo')}}>
      <div className="text-3xl font-bold text-white mr-3 font-robotoCondensed uppercase">Sorteio</div>
      <FiGift size={50} color="#FFA323"/>
    </div>
  )
}

export default Prize
