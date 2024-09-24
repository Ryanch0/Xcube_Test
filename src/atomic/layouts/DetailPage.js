import React from 'react'
import styled from 'styled-components'
import SideBar from '../molecules/SideBar'
import { MAIN_BG_COLOR } from '../../const/color'
import ViewTool from '../molecules/ViewTool'
import EditTool from '../molecules/EditTool'



const ContainerWrap = styled.div`
    background-color: ${MAIN_BG_COLOR};
    width: 100vw;
    height: 100vh;
    position: relative;
`

export default props => {
    const menu = ['View', 'Occlusal Contact']
    return (
        <ContainerWrap>
            <SideBar/>
            <ViewTool/>
            <EditTool/>

        </ContainerWrap>
    )
}