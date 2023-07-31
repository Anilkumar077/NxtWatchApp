import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarHeader = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`
export const HeaderLogo = styled.img`
  width: 80px;
  height: 80px;
  @media screen and (min-width: 768px) {
    width: 140px;
    height: 35px;
  }
`
export const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
`
export const LogoutButton = styled.button`
  border: 1px solid;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  text-align: center;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-color: ${props => props.color};
  margin-left: 6px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 150px;
  width: 250px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 70px;
    width: 70px;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 8px;
  padding: 5px;
  color: grey;
  margin: 10px;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
  }
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 5px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Roboto';
  margin: 10px;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
  }
`
export const ModalDesc = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: ${props => props.color};
  margin: 10px;
  text-align: center;
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  border-radius: 8px;
  padding: 20px;
`

export default styled
