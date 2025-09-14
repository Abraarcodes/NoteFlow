import React, { useState } from 'react'
import TestimonialsList from './TestimonialsList'
import { testimonials as test} from '../../../utils/content'
import CaretUp from '../../icons/CaretUp'

function Testimonials() {
    const [expanded,setExpanded] = useState(false)
  return (
    <section className='bg-gradient-to-top'>
        <div className='max-w-[90rem] m-auto flex flex-col items-center px-24 py-32'>
            <div className='mb-20 flex max-w-[51.625rem] flex-col items-center gap-y-6'>
                <p className='text-primary-1300 bg-primary-500 primary-glow w-min rounded-full py-2 px-4 text-base/8'>Testimonials</p>
                <h2 className='text-primary-50 text-center text-6xl/18 font-semibold tracking-tighter'>What our AI-powered
notetakers have to say</h2>
                <p className='text-primary-100 px-28 text-center text-xl/loose font-light'>NoteFlow has helped 1000&apos;s supercharge their productivity with cutting edge AI note taking tools</p>
            </div>

            <div className='grid grid-cols-3 mb-20 gap-x-6'>
                <TestimonialsList testimonials={test.slice(0, expanded ? 5 : 2)}/>
                <TestimonialsList testimonials={test.slice(5, expanded ? 10 : 7)}/>
                <TestimonialsList testimonials={test.slice(10, expanded ? 15 : 12)}/>
            </div>

            <button className='border-2 border-primary-50 rounded-full px-8 py-2.5 text-lg/8 flex items-center text-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 group cursor-pointer gap-x-3'
            onClick={()=>setExpanded(curr=>!curr)}>
                {expanded ? "Show less" : "Show more"}
                <CaretUp
                  className={`stroke-primary-50 rotate-180 group-hover:stroke-primary-1300 transition-all duration-300 ${expanded && "rotate-360"}`} 
                   width={2}
                   />
            </button>
        </div>
    </section>
  )
}

export default Testimonials
