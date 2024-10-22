"use client"
import Image from "next/image"
import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import Modal from 'react-modal'
import { Pizza } from "../types"
import PizzaDetails from "./PizzaDetails"

Modal.setAppElement('body')

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
}
const PizzaComponent = ({pizza}: {pizza: Pizza}) => {
  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
      <Image className="lg:group-hover:translate-y-2 transition-all duration-300 mb-8" src={pizza.image} width={270} height={270} alt='' priority={true}/>
      <div>
        <div onClick={openModal} className="text-xl font-bold mb-3 capitalize cursor-pointer">
          {pizza.name}
        </div>
      </div>
      <div className="text-sm font-medium min-h-[60px] mb-6">
        {pizza.description}
      </div>
      <div className="mb-6 flex items-center justify-between">
        <div className="hidden lg:flex text-xl font-semibold">
          A partir de R$ {pizza.priceSm}
        </div>
        <button onClick={openModal} className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm">
          Adicionar ao carrinho
        </button>
        <button onClick={openModal} className="btn btn-sm gradient lg:hidden px-3">
          A partir de R$ {pizza.priceSm}
        </button>
      </div>
      {modal && 
      <Modal isOpen={modal} 
      style={modalStyles} 
      onRequestClose={closeModal}
      contentLabel="Pizza Modal" 
      className='bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none'>
        <div onClick={closeModal} className="absolute z-30 right-5 top-5 hover:scale-110 duration-200 cursor-pointer">
          <IoCloseOutline className="text-4xl text-orange"/>
        </div> 
        <PizzaDetails pizza={pizza} modal={modal} setModal={setModal}/>
      </Modal>}
    </div>
  )
}

export default PizzaComponent
