import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Nav = () => {
  return (
    <nav className="absolute w-full py-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-y-3 justify-between items-center">
        <Link href={"#"} className="max-w-[160px] lg:max-w-max">
          <h1 className="font-bangers text-5xl text-white">NOVO<span className="text-[#FFA323]">SABOR</span></h1>
        </Link>
        <div className="flex gap-x-3 items-center justify-center">
          <div className="flex gap-x-3 items-center">
            <FaWhatsapp size={50} color="#FFA323"/> 
            <div className="text-white">
              <div className="font-robotoCondensed uppercase font-bold leading-none text-xl">Chama no zap</div>
              <div className="text-xl font-robotoCondensed font-extrabold">63 9 85021531</div>
            </div>
          </div>
          <div className="relative cursor-pointer hidden lg:flex">
            <FaCartShopping size={50} color="#FFA323"/>
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute left-9">3</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
