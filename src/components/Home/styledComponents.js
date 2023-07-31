import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 10px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 230px;
    margin-bottom: 0px;
    padding-left: 18px;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  min-height: 150px;
  display: ${props => props.display};
  justify-content: space-between;
  padding: 20px;
`
export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerImage = styled.img`
  width: 150px;
  height: 38px;
`

export const BannerRightPart = styled.div`
  width: 80px;
  height: 30px;
`

export const BannerButton = styled.button`
  color: #000000;
  background: none;
  border: 1px solid #000000;
  padding: 5px;
`

export const BannerText = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #000000;
`

export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
`

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 3px;
  margin: 20px;
  width: 60%;
  height: 40px;
  @media screen and (min-width: 567px) {
    width: 40%;
  }
`
export const SearchIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 70px;
  border: none;
`

export const SearchInput = styled.input`
  background: none;
  width: 100%;
  outline: none;
  padding: 5px;
  border: none;
  color: ${props => props.color};
  font-family: 'Roboto';
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export default styled
