import styled from "styled-components"
import * as Card from "../../components/Card/styles"
import * as InsertAnnotation from "../../components/InsertAnnotation/styles"

export const Container = styled.div`
  ${InsertAnnotation.Container} {
    margin: 0 auto 50px auto;
  }

  ${Card.Container} {
    margin: 10px;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
