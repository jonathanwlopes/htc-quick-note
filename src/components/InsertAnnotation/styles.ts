import styled from "styled-components"
import IconChecked from '../../assets/images/icon-checked.svg'
import IconImage from '../../assets/images/icon-images.svg'

export const Container = styled.div`
  width: 592px;
  border: 1px solid ${({theme}) => theme.colors.mediumGrey};
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  padding: 15px;
  display: flex;
  justify-content: space-between;
`
export const Input = styled.input`
  all: unset;
  width: 85%;
`

export const CheckedIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${IconChecked});
`

export const ImageIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${IconImage})
`