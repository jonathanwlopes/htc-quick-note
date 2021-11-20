import styled from "styled-components"

export const Avatar = styled.img`
  background-image: url(${(props) => props.src ?? props.src});

  max-width: 70px;
  max-height: 70px;

  cursor: pointer;
`
