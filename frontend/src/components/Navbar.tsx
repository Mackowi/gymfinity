import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className='fixed top-0 z-30 bg-white w-full px-8 py-6'>
      <div className='text-black flex justify-between items-center relative'>
        <h1 className='font-logo text-3xl'>GYMFINITY</h1>
        <div className='hidden lg:flex items-center lg:space-x-8 font-bold '>
          <div className='navLink'>MEMBERSHIPS</div>
          <div className='navLink'>CLUBS</div>
          <div className='navLink'>PERSONAL TRAINING</div>
          <div className='navLink'>FREE TRIAL</div>
          <button className='btn py-2'>JOIN NOW</button>
        </div>
        <button
          id='menu-btn'
          className={`block hamburger lg:hidden focus:outline-none ${
            open ? 'open' : ''
          }`}
          onClick={() => {
            setOpen(!open)
            document.body.classList.toggle('overflow-hidden')
          }}
        >
          <span className='hamburger-top z-40'></span>
          <span className='hamburger-middle z-40'></span>
          <span className='hamburger-bottom z-40'></span>
        </button>
      </div>
      <div className={`${open ? 'block' : 'hidden'} fixed inset-0 bg-white`}>
        <div className='flex justify-between items-center px-8'>
          <span className='font-logo text-3xl py-6'>GYMFINITY</span>
        </div>
        <div className='flex flex-col gap-8 px-8'>
          <div className='navLink'>MEMBERSHIPS</div>
          <div className='navLink'>CLUBS</div>
          <div className='navLink'>PERSONAL TRAINING</div>
          <div className='navLink'>FREE TRIAL</div>
          <div className='font-extrabold navLink'>JOIN NOW</div>
        </div>
        <div className='bg-black h-1 w-full mt-8 '></div>
      </div>
    </div>
  )
}
export default Navbar
