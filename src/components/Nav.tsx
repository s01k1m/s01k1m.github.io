import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import navlinks from "../data/navlinks";

const NavBar = styled.nav`
  /* 웹형 */
  background: #d9d9d9;
  color: #555;
  font-size: 16px;
  width: 100vw;
  height: 48px;
  padding: 0px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .image {
    width: 30px;
    height: 30px;
  }

  .web a {
    margin-right: 60px;
    padding: 8px;
  }
  .web a:hover,
  .web a:active {
    background: #cfcfcf;
    padding: 8px;
    border-radius: 5px;
  }

  a.hamburger {
    font-size: 20px;
  }

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
`;

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState<Boolean>(false);

  return (
    <NavBar>
      <div className="flex web">
        <Link className="h-[35px] w-[35px] relative" href="/">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto object-fill"
            // Image는 항상 public 에서 찾는다
            src="/icons/pine.png"
            alt="home icon"
          />
        </Link>
        {navlinks.map((nav) => (
          <Link
            className="hidden min-[640px]:inline-block"
            href={nav.link}
            key={nav.title}
          >
            {nav.title}
          </Link>
        ))}
      </div>
      {/* hamburger menu */}
      <div
        className="hamburger max-[640px]:visible invisible flex flex-col space-y-1 z-10"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <span className="block h-[2px] w-6 animate-pulse bg-gray-600"></span>
        <span className="block h-[2px] w-6 animate-pulse bg-gray-600"></span>
        <span className="block h-[2px] w-6 animate-pulse bg-gray-600"></span>
      </div>
      <div
        className={`min-[640px]:invisible ${
          isNavOpen ? "showMenuNav" : "hideMenuNav"
        }`}
      >
        {navlinks.map((nav) => (
          <Link className="hamburger" href={nav.link} key={nav.title}>
            {nav.title}
          </Link>
        ))}
      </div>
    </NavBar>
  );
};

export default Nav;
