import styled from "styled-components"

export const ItemNavigation = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  cursor: pointer;

  & + li {
    margin-top: 20px;
  }
`

export const SubListNavigation = styled.ul`
  padding-left: ${({ theme }) => theme.paddings.p10};
  padding-top: ${({ theme }) => theme.paddings.p5};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.img`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontsSize.f6};
  margin-right: 20px;
`

export const Item = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontsSize.f4};
`
