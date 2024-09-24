import React from 'react'
import styled from 'styled-components'
import SideBar from '../molecules/SideBar'
import { MAIN_BG_COLOR } from '../../const/color'
import ViewTool from '../molecules/ViewTool'
import EditTool from '../molecules/EditTool'



const ContainerWrap = styled.div`
    overflow: auto;
    background-color: ${MAIN_BG_COLOR};
    width: 100vw;
    height: 100vh;
    position: relative;
`
const ToolBoxWrap = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 16px 16px 16px 0;
`

export default props => {
    const menu = ['View', 'Occlusal Contact']
    return (
        <ContainerWrap>
            <SideBar/>
            <ToolBoxWrap>
            <ViewTool/>
            <div style={{height : '16px'}}/>
            <EditTool/>                
            </ToolBoxWrap>

        </ContainerWrap>
    )
}