import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin: 20px;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 7px;
  padding-left: 0px;
`
export const Title = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  margin-top: 0px;
  padding-top: 0px;
  color: ${props => props.color};
`
export const ChannelName = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  margin-top: 0px;
  padding-top: 0px;
  color: ${props => props.color};
`
export const ViewsAndDate = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  padding-top: 0px;
  margin-top: 0px;
  color: ${props => props.color};
`

export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`

export default styled
