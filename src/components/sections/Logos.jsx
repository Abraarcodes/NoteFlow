import React from 'react'
import { logos } from '../../utils/content'

function Logos() {
  return (
    <section className='bg-gradient-to-top'>
        <div className='max-w-[90rem] m-auto px-24 py-28'>
            <p className='text-primary-50 text-center text-xl/loose mb-20 m-auto'>Organizations that are powered by <span className='font-bold tracking-tight'>NoteFlow</span>
            </p>
            <div className='flex flex-col gap-y-16'>
                <ul className='flex flex-wrap justify-between'>
                    {logos.slice(0,4).map((logo)=>{
                        return(
                            <li key={logo.id}>
                                <img src={logo.src} alt={logo.alt} className='h-10'/>
                            </li>
                        )
                    })}
                </ul>
                <ul className='flex flex-wrap justify-between'>
                    {logos.slice(4).map((logo)=>{
                        return(
                            <li key={logo.id}>
                                <img src={logo.src} alt={logo.alt} className='h-10' />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Logos
