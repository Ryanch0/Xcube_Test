import React from 'react'
import styled from 'styled-components'
import TabMenu from '../atoms/TabMenu'
import logo from '../../assets/logo.svg'
import crown from '../../assets/sidebar/crown.png'
import exportIcon from '../../assets/sidebar/exportIcon.png'
import feedback from '../../assets/sidebar/feedback.png'
import folder from '../../assets/sidebar/folder.png'
import jaw from '../../assets/sidebar/jaw.png'
import tooth from '../../assets/sidebar/tooth.png'
import ProfileCard from '../atoms/ProfileCard'


const Container = styled.div`
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    width: 14%;
    height: 100vh;
`
const Logo = styled.img`
    width: 100%;
    height: 100px;
    padding: 20px;
`


export default props => {
    return (
        <Container>
            <Logo src={logo} alt='logo'/>
            <TabMenu src={folder}>Open File</TabMenu>
            <TabMenu src={jaw}>Edit Jaw</TabMenu>
            <TabMenu src={tooth}>Create Tooth</TabMenu>
            <TabMenu src={crown}>Edit Crown</TabMenu>
            <TabMenu src={exportIcon}>Export</TabMenu>
            <TabMenu src={feedback} count='3'>Feedback</TabMenu>
            <ProfileCard/>
        </Container>
    )
}