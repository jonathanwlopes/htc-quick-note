import styled from "styled-components"

export const Container = styled.aside`
  background-image: linear-gradient(to right top, #432874, #40266e, #3c2468, #392263, #36205d);
  margin-top: 80px;
  position: fixed;
  padding-left: ${({ theme }) => theme.paddings.p8};
  width: 240px;
  height: 100vh;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  padding: 20px 0;

  position: relative;
  &:before {
    position: absolute;
    content: "";
    width: calc(100% + 25px);
    height: 3px;
    bottom: 0;
    left: -25px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`

export const ListNavigation = styled.ul`
  padding-top: 15px;
`

export const SubListNavigation = styled.ul`
  padding-left: ${({ theme }) => theme.paddings.p10};
  padding-top: ${({ theme }) => theme.paddings.p5};
`

export const ItemNavigation = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  cursor: pointer;

  & + li {
    margin-top: 20px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Item = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontsSize.f4};
`
