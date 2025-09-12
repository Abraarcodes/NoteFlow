import React from 'react'
import Logo from '../icons/Logo'
import {navigationLinks} from '../../utils/content'

function Navigation() {
  return (
    <nav className='text-primary-50 flex justify-between m-auto px-24 max-w-[90rem] text-lg/8 font-light'>
        <a href="#" className='flex items-center gap-x-3'>
            <Logo h={6} width={5}/>
            <p className='text-xl font-bold tracking-tight'>NoteFlow</p>
        </a>

        <ul className='flex items-center gap-x-8'>
            {navigationLinks.map((link)=>(
                <li key={link.id}>
                    <a href={link.href} className='hover:text-primary-500 transition-properties'> {link.link}</a>
                </li>
            ))}
        </ul>

        <div className='flex items-center gap-x-3'>
            <button className='border-2 rounded-full py-3.5 px-8 border-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 font-normal cursor-pointer text-lg/8'>Login</button>
            <button className='bg-primary-500 text-primary-1300 font-normal rounded-full py-3.5 px-8 border-2 border-primary-500 cursor-pointer hover:bg-primary-50 hover:border-primary-50 transition-properties primary-glow primary-glow-hover text-lg/8'>Get Started</button>
        </div>
    </nav>
  )
}

export default Navigation



