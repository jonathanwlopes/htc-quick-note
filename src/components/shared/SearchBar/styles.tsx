import styled from "styled-components"
import { FaSearch } from "react-icons/fa"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 2px solid ${({ theme }) => theme.colors.mediumGrey};
  border-radius: 4px 4px 0 0;

  background: ${({ theme }) => theme.colors.white};

  position: relative;
  &::after {
    content: "";
    position: absolute;
    right: 45px;
    border-left: 2px solid ${({ theme }) => theme.colors.mediumGrey};
    height: 100%;
  }
`

export const Input = styled.input`
  all: unset;
  width: 90%;
  height: auto;
`

export const IconSearch = styled(FaSearch)`
  color: ${({ theme }) => theme.colors.lightBlue};
`
