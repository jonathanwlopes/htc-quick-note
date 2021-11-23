import styled from "styled-components"

export const Container = styled.div`
  width: 270px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 46.15%);
  border-radius: 10px;
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontsSize.f4};
  color: ${({ theme }) => theme.colors.mediumGrey};
  line-height: 24px;
  font-weight: 700;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Check = styled.div`
  width: 16px;
  height: 16px;
  border: 1.5px solid #c4c4c4;
  border-radius: 2px;
`
export const TaskName = styled.span`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontsSize.f3};
  line-height: 24px;
`
