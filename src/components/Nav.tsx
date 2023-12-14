'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import styled from 'styled-components'
import navlinks from '../data/navlinks'

const NavBar = styled.nav`
  /* 웹형 */
  // background: #d9d9d9;
  color: #555;
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

  // 햄버거 메뉴 //

  // 햄버거 메뉴 안에 링크
  a.hamburger {
    color: gray;
    font-size: 20px;
    cursor: pointer;
    position: relative;
  }

  a.hamburger:hover {
    color: black;
    transform: translate(10px, 0);
    padding: 1px;
    transition: 0.4s ease-in-out;
  }

  // 햄버거 애니메이션

  #nav-icon3 span:nth-child(1),
  #nav-icon3 span:nth-child(2) {
    -webkit-transition: 0.3s ease-in-out;
    -moz-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }

  // 햄버거 열면 x 만들기

  #nav-icon3 span:nth-child(1) {
    position: absolute;
    top: 22px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #nav-icon3 span:nth-child(2) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #nav-icon3 span:nth-child(3) {
    width: 0%;
  }

  // 햄버거 메뉴 반응형으로 숨기고 보이기

  .hideMenuNav {
    display: none;
  }
  .showMenuNav {
    display: block;
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: white;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  /* 패드 */
  @media screen and (min-width: 640px) and (max-width: 768px) {
    a {
      margin-right: 30px;
      padding: 8px;
    }
  }
  /* 모바일 */
  @media screen and (max-width: 640px) {
  }
}
`

const Nav = () => {
  const router = usePathname()
  const [isNavOpen, setIsNavOpen] = useState<Boolean>(false)

  const isActiveNav = (navPath: string) => {
    if (navPath === '/') return router === navPath

    return router.startsWith(navPath)
  }

  return (
    <NavBar>
      <div className="web flex">
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
      </div>
      {/* hamburger menu */}
      <div
        id={`${isNavOpen ? 'nav-icon3' : ''}`}
        className="hamburger invisible z-10 flex flex-col space-y-1 max-[640px]:visible"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <span className="block h-[2px] w-6 bg-gray-600"></span>
        <span className="block h-[2px] w-6 bg-gray-600"></span>
        <span className="block h-[2px] w-6 bg-gray-600"></span>
      </div>
      <div
        className={`min-[640px]:invisible ${
          isNavOpen ? 'showMenuNav' : 'hideMenuNav'
        }`}
      >
        {navlinks.map((nav) => (
          <Link
            className="hamburger"
            href={nav.link}
            key={nav.title}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            {nav.title}
          </Link>
        ))}
      </div>
    </NavBar>
  )
}

export default Nav
