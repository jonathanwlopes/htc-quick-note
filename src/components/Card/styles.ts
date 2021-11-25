import styled from "styled-components"
import * as InfoCard from '../InfoCard/styles'

export const Container = styled.ul`
  width: 270px;
  height: 442px;
  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.colors.mediumGrey};
  padding: 17px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  position: relative;

  & li + li {
    margin-top: 4px;
  }

  & ${InfoCard.Container}{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 30%;
    padding: 15px;
  }

`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontsSize.f5};
  color: ${({ theme }) => theme.colors.lightGrey};
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 25px;
`

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`

export const Check = styled.div`
  width: 14px;
  height: 14px;
  border: 1.5px solid #c4c4c4;
  border-radius: 2px;
  margin-right: 10px;
`
export const TaskName = styled.span`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontsSize.f4};
  line-height: 24px;
`
