import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { IoReload } from "react-icons/io5"

import * as Logo from "../shared/Logo/styles"
import * as Search from "../shared/SearchBar/styles"
import * as Profile from "../shared/Profile/styles"

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  padding: ${({ theme }) => theme.paddings.p1} ${({ theme }) => theme.paddings.p5};
  width: 100%;
  height: 80px;
  
  position: fixed;


  ${Logo.Container} {
    margin-right: 85px;
  }

  ${Search.Container} {
    width: 450px;
    margin-right: ${({ theme }) => theme.margins.m5};
    padding: 0.5rem 1rem 0.5rem 1.5rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobiles.laptopS}) {
    ${Logo.Container} {
      margin-right: unset;
    }

    ${Search.Container} {
      display: none;
    }

    ${Profile.ProfileInfos} {
      display: none;
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const IconBars = styled(FaBars)`
  color: ${(props) => props.theme.colors.white};
  font-size: 28px;
  cursor: pointer;
  margin-right: ${({ theme }) => theme.margins.m5};
`

export const IconReload = styled(IoReload)`
  color: ${(props) => props.theme.colors.white};
  font-size: 28px;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.mobiles.laptopS}) {
    display: none;
  }
`
