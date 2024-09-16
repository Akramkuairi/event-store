import { BsArrowUp } from '@react-icons/all-files/bs/BsArrowUp'
import { FaWhatsapp  } from '@react-icons/all-files/fa/FaWhatsapp'
import React from 'react'

export const FlowButtons = () => {
  return (
    <div className='fixed bottom-5 right-5 z-max' style={{zIndex:99999}}>
        <div className="flex space-x-5" >
                <a className='bg-orangeLogo  text-lg px-2 py-2 rounded-md animate-bounce hover:bg-yellowLogo ' href='#header'>
                    <BsArrowUp />
                </a>
                <a className='bg-green-500 text-lg  px-2 py-2 rounded-md animate-bounce hover:bg-green-300' target='_blank' href='https://wa.me/+4915120497644'>
                    <FaWhatsapp />
                </a>
        </div>
    </div>
  )
}
