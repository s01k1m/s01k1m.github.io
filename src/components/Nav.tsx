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
  align-items: center;

  .image {
    width: 30px;
    height: 30px;
  }

  a {
    margin-right: 60px;
    padding: 8px;
  }
  a:hover,
  a:active {
    background: #cfcfcf;
    padding: 8px;
    border-radius: 5px;
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
  return (
    <NavBar>
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
        <Link className="invisible sm:visible" href={nav.link} key={nav.title}>
          {nav.title}
        </Link>
      ))}
    </NavBar>
  );
};

export default Nav;
