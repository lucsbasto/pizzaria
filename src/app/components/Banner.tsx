"use client"

import Image from "next/image"
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse"

const Banner = () => {
  return (
    <section className="bg-primary bg-pattern lg:h-[100vh] lg:min-h-[768px] pt-16 lg:pt-16">
      <div className="container mt-10 mx-auto min-h-[768px] flex items-center justify-center">
        <MouseParallaxContainer globalFactorX={0.4} globalFactorY={0.3} resetOnLeave className="w-full flex flex-col lg:flex-row justify-center items-center">
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className="flex flex-coll lg:flex-row items-center text-center lg:text-left flex-1 px-6 text-white">
              <div className="flex-1">
                <div className="font-bangers text-[24px] text-white uppercase tracking-[0.03em]">
                  Melhor pizza da cidade
                  <h1 className="text-5xl lg:text-8xl font-bangers drop-shadow-md">
                    Um novo sabor <br /> a cada mordida
                    </h1>
                </div>
              </div>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.2} factorY={0.3} className="relative">
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left flex-1">
              <div className="flex-1 flex justify-end max-w-md lg:max-w-max">
                <Image src={'/pizza-banner.png'} width={550} height={558} alt="" priority={true}/>
              </div>
            </div>
            <MouseParallaxChild factorX={0.2} factorY={0.3} className="absolute top-6 left-4 hidden xl:flex">
              <Image src={'/chilli-1.png'} width={160} height={84} alt=""/>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.4} factorY={0.4} className="absolute top-16 left-4 hidden xl:flex">
              <Image src={'/chilli-2.png'} width={130} height={84} alt=""/>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.6} factorY={0.6} className="absolute top-0 -left-2/4 hidden xl:flex">
              <Image src={'/cherry.png'} width={200} height={200} alt=""/>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.2} factorY={0.6} className="absolute top-[22rem] -left-25 hidden xl:flex">
              <Image src={'/garlic-2.png'} width={100} height={72} alt=""/>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.4} factorY={1} className="absolute top-96 -left-28 hidden xl:flex">
              <Image src={'/garlic-3.png'} width={100} height={72} alt=""/>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.4} factorY={1} className="absolute top-96 -left-4 hidden xl:flex">
              <Image src={'/leaves.png'} width={180} height={72} alt=""/>
            </MouseParallaxChild>
          </MouseParallaxChild>
          </MouseParallaxContainer>
      </div>
    </section>
  )
}

export default Banner
