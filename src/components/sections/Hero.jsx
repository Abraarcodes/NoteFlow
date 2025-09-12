import React from 'react'
import ArrowRight from '../icons/ArrowRight'
import ArrowRightLine from '../icons/ArrowRightLine'
import HeroGraphic from '../../assets/graphics/HeroGraphic.webp'

function Hero() {
  return (
    <div className='max-w-[90rem] px-24 m-auto grid grid-cols-[5fr_4fr] py-42 items-center gap-x-18'>
      <div>
        <h1 className='text-primary-50 font-semibold tracking-tight text-6xl/18 mb-6'>AI-powered Notes. Organize and Summarise in Seconds</h1>
        <p className='text-primary-100 font-light text-xl/loose mb-10'>Let Ai organize and summarize your notes,<br/> saving your time and bossting your productivity </p>
        <button className='flex items-center text-primary-1300 bg-primary-500 border-primary-500 primary-glow primary-glow-hover transition-propeties rounded-full px-8 py-3.5 cursor-pointer group hover:border-primary-50 hover:bg-primary-50 gap-x-3'>
            <p className='text-lg/8'>Get Started</p>
            <div className='w-5'>
                <ArrowRightLine className='stroke-primary-1300 transition-properties -mr-3 inline w-0 opacity-0 group-hover:opacity-100 group-hover:w-3 ease-in-out'
                width={2.5}
                />
                <ArrowRight className='inline stroke-primary-1300 w-5 '/>
            </div>
        </button>
      </div>
      <div className='relative'>
        <div className='bg-primary-1300  absolute top-0 bottom-0 left-0 right-0 rounded-full blur-3xl'/>
        <img src={HeroGraphic} alt="" 
        className="max-h-[30rem] justify-self-end relative"/>
      </div>
    </div>
  )
}

export default Hero
