import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 90) {
        setColor('#fff')
        setTextColor('#000')
      } else {
        setColor('transparent')
        setTextColor('#fff')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Captur
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="py-2 px-4 relative">
            <Link href="/">Home</Link>
          </li>
          <li className="py-2 px-4 relative">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="py-2 px-4 relative">
            <Link href="/work">Work</Link>
          </li>
          <li className="py-2 px-4 relative">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block z-10 sm:hidden">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 sm:hidden'
              : 'absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 sm:hidden'
          }
        >
          <ul>
            <li onClick={handleNav} className="p-4 text-3xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-3xl hover:text-gray-500">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-3xl hover:text-gray-500">
              <Link href="/work">Work</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-3xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
