import styled from "styled-components"

export const Avatar = styled.img`
  background-image: url(${(props) => props.src ?? props.src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  
  max-width: 70px;
  max-height: 70px;

  cursor: pointer;
`
