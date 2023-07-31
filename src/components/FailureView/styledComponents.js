import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const FailedImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const FailedHeading = styled.h1`
  font-size: 23px;
  font-family: 'Roboto';
  color: ${props => props.headingColor};
  text-align: center;
`
export const FailedNote = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: ${props => props.headingColor};
  text-align: center;
`
export const RetryButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 10px;
`

export default styled
