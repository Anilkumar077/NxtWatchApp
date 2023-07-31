import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const GamingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`

export const GamingThumbNailImage = styled.img`
  width: 100%;
  height: 300px;
  align-self: center;
  @media screen and (min-height: 768px) {
    width: 280px;
  }
`

export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const GamingTitle = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 0px;
  color: ${props => props.color};
`
export const GamingViewsAndDate = styled.p`
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export default styled
