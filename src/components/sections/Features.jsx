import React from 'react'
import SmartOrganization from '../../assets/graphics/SmartOrganization.webp'
import ContextualReminders from '../../assets/graphics/ContextualReminders.webp'


function Features() {
  return (
    <section className="bg-primary-1500 bg-[url('../src/assests/Noise.webp')] bg-repeat overflow-hidden ">
        <div className='text-primary-50 relative m-auto max-w-[90rem] px-24 py-32 '>
            <div className='bg-primary-1300 absolute h-[62.5rem] w-[62.5rem] opacity-100 rounded-full top-[50%] left-[100%] -translate-[50%] blur-[40rem]'/>
            
            <h2 className='mb-28 text-center text-6xl/18 font-semibold tracking-tighter'>
            All The Tools You Need to <br /><span className='text-primary-500 primary-glow'>Supercharge</span> Your Note Taking
            </h2>

            <div className='mb-20 grid grid-cols-2 items-center gap-x-16'>
                <figure>
                    <img src={SmartOrganization} alt=""
                    className='max-h-[45rem]' />
                </figure>
                <div className='z-1 max-w-lg justify-self-end '>
                    <p className='mb-8 text-5xl/16 font-semibold tracking-tighter'>Smart Organization</p>
                    <p className='text-primary-100 z-1 text-xl/loose font-light'>Automatically categorize and tag your notes using AI-driven analysis. NoteFlow intelligently identifies key topics and organizes your content, making it easy to find and retrieve your notes when you need them most.</p>
                </div>
            </div>

            <div className='grid grid-cols-2 items-center gap-x-16'>
                <div className='max-w-lg justify-self-start'>
                    <p className='mb-8 text-5xl/16 font-semibold tracking-tighter'>Contextual Reminders</p>
                    <p className='text-primary-100 z-1 text-xl/loose font-light'>Stay on top of important tasks with AI-powered reminders that adapt to the context of your notes. NoteFlow recognizes deadlines, follow-ups, and key actions from your notes and sends timely alerts to ensure nothing slips through the cracks.</p>
                </div>
                <figure className='z-1'>
                    <img src={ContextualReminders} alt="" />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Features
