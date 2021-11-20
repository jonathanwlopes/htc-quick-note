import styled from "styled-components"
import { LogoProps } from "./types"

export const Container = styled.div``

export const Title = styled.h2<LogoProps>`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.white};
`
