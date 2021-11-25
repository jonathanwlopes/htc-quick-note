import styled from "styled-components"
import * as ProfileAvatar from "../shared/ProfileAvatar/styles"

export const Container = styled.div`
  background-image: linear-gradient(to top, #000000E6, #3b3b3bE6, #777777b3, #b9b9b9b3, #ffffff);
  border-radius: 0 0 10px 10px;

  & ${ProfileAvatar.Avatar} {
    width: 35px;
    height: 35px;
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
  }
`
