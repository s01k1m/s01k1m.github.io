'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

import navlinks from '../data/navlinks'
import { MenuToggle } from './MenuToggle'

const NavBar = styled.nav`
  /* 웹형 */
  // background: #d9d9d9;
  color: #555555;
  font-size: 14px;
  width: 100vw;
  height: 48px;
  padding: 00px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .image {
    width: 30px;
    height: 30px;
  }

  // 모바일 메뉴 //

  // 모바일 메뉴 안에 링크
  a.mobileNav {
    color: gray;
    font-size: 20px;
    cursor: pointer;
    position: relative;
  }

  a.mobileNav:hover {
    color: var(--modric-gold);
    transform: translate(10px, 0);
    transition: 0.4s ease-in-out;
  
  }

  a.mobileNav:hover::after{
    content:"♦︎";
    position:absolute;
    padding-left: 10px;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.7); 
    animation: neon-flicker 1s infinite alternate;
  }


  // 모바일 메뉴 반응형으로 숨기고 보이기
  
  .hideMenuNav {
    display: none;
  }
  .showMenuNav {
    display: block;
    position: absolute;
    width:100%;
    height:100%;
  
    top: 0;
    left: 0;
    background: black;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  /* 패드 */
  @media screen and (min-width: 640px) and (max-width: 768px) {
  }
  /* 모바일 */
  @media screen and (max-width: 640px) {
  }


  @keyframes neon-flicker {
    0% {
        text-shadow: 
        0 0 10px rgba(0, 255, 255, 0.7), 
        0 0 20px rgba(0, 255, 255, 0.7), 
        0 0 30px rgba(0, 255, 255, 0.7);
    }
    100% {
        text-shadow: 
        0 0 20px rgba(0, 255, 255, 0.7), 
        0 0 30px rgba(0, 255, 255, 0.7), 
        0 0 40px rgba(0, 255, 255, 0.7);
    }
} 
}
`

const Nav = () => {
  const router = usePathname()
  const [mobileNavOpen, setMobileNavOpen] = useState<Boolean>(false)

  const isActiveNav = (navPath: string) => {
    if (navPath === '/') return router === navPath

    return router.startsWith(navPath)
  }

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    closed: {
      opacity: 1,
      y: '0%',
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.4,
        delay: 0.9,
      },
    },
  }

  return (
    <NavBar>
      <AnimatePresence>
        <motion.div
          variants={hideNavItemsVariant}
          initial="closed"
          animate={mobileNavOpen ? 'opened' : 'closed'}
          transition={{ type: 'spring', stiffness: 100 }}
          className="web flex"
        >
          <Link className="relative h-[35px] w-[35px] shrink-0 p-1" href="/">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full object-fill"
              // Image는 항상 public 에서 찾는다
              src="/icons/pine.png"
              alt="home icon"
            />
          </Link>
          {navlinks.map((nav) => (
            <Link
              className={`${
                isActiveNav(nav.link)
                  ? 'borde after: font-black text-black text-shadow-default after:-ml-1 after:content-["ㅤ♦︎"]'
                  : ''
              }  ml-6  hidden h-[35px] shrink-0 align-middle hover:font-black hover:text-black min-[640px]:flex min-[640px]:items-center min-[640px]:justify-center`}
              href={nav.link}
              key={nav.title}
            >
              {nav.title}
            </Link>
          ))}
        </motion.div>
        {/* mobileNav menu */}
        <MenuToggle
          toggle={() => setMobileNavOpen((prev) => !prev)}
          isNavOpen={mobileNavOpen}
        />
        {mobileNavOpen && (
          <motion.div
            key="100"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit="exit"
            className={`min-[640px]:invisible ${
              mobileNavOpen ? 'showMenuNav' : 'hideMenuNav'
            }`}
          >
            {navlinks.map((nav, index) => (
              <motion.a
                key={index + 1}
                className="mobileNav"
                href={nav.link}
                onClick={() => setMobileNavOpen((prev) => !prev)}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: 'easeInOut',
                    delay: 0.7 - index * 0.1,
                  },
                }}
              >
                {nav.title}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </NavBar>
  )
}

export default Nav
