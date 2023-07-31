import styled from 'styled-components'

export const SavedContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const SavedTitleIconContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const SavedText = styled.h1`
  font-size: 28px;
  font-weight: 600;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const SavedVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`
export const NoSavedVideosView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const NoSavedVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoSavedVideosHeading = styled.h1`
  font-size: 23px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.headingColor};
  text-align: center;
`
export const NoSavedVideosNote = styled.p`
  font-size: 23px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.noteColor};
`

export default styled
