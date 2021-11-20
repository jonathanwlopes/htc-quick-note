import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProfileInfos = styled.div`
  margin-right: 15px;
  text-align: right;
`

export const Welcome = styled.p`
  color: ${({ theme }) => theme.colors.white};
`

export const NameProfile = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`

export const Notes = styled.p`
  color: ${({ theme }) => theme.colors.white};
`

export const Quantity = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`
