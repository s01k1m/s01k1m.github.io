import * as React from 'react'
import { motion } from 'framer-motion'
import '../app/styles/menuToggle.css'

export const MenuToggle = ({ toggle, isNavOpen }) => (
  <div
    id={`${isNavOpen ? 'nav-icon3' : 'nav-icon1'}`}
    className="hamburger invisible z-[1000] flex flex-col space-y-1 max-[640px]:visible"
    onClick={toggle}
  >
    <span className="block h-[2px] w-6 bg-gray-600"></span>
    <span className="block h-[2px] w-6 bg-gray-600"></span>
    <span className="block h-[2px] w-6 bg-gray-600"></span>
  </div>
)
