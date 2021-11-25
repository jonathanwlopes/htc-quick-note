import styled from "styled-components"
import { CheckBoxProps } from "./types"
import IconCheck from '../../../assets/images/icon-check.svg'

export const Check = styled.div<CheckBoxProps>`
  width: 14px;
  height: 14px;
  border: 1.5px solid #c4c4c4;
  border-radius: 2px;
  margin-right: 10px;
  background-image: url(${(props) => props.isDone ? IconCheck : ''});
  background-repeat: no-repeat;
  background-size: 10px 10px;
  background-position: center center;
  padding: 2px;
`
