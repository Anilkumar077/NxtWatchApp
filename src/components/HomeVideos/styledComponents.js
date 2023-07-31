import styled from 'styled-components'

export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NoVideoImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 380px;
  }
`
export const NoVideoHeading = styled.h1`
  font-size: 23px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.headingColor};
`

export const NoVideoNote = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.noteColor};
`
export const RetryButton = styled.button`
  border: none;
  border-radius: 3px;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 13px;
  font-family: 'Roboto';
  padding: 10px;
  width: 80px;
`

export default styled
