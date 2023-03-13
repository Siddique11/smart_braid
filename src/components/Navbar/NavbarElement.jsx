import styled from "styled-components";

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: transparent;
  z-index: 1000;

  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem (calc(100vw - 1000px) / 2);
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 400;
  padding: 0 2rem;
  height: 100%;
  padding: 20px 30px;
  cursor: pointer;

  &:active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  /* color: #fff; */

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Navbtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
