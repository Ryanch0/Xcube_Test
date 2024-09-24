import React from 'react'
import styled from 'styled-components'
import SideBar from '../molecules/SideBar'
import { MAIN_BG_COLOR } from '../../const/color'
import ViewTool from '../molecules/ViewTool'
import EditTool from '../molecules/EditTool'
import sample from '../../assets/sample.png'
import samplelist from '../../assets/samplelist.png'


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
    padding: 16px 16px 0 0;
`
const SampleImage = styled.div`
    width: 40%;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    img{
        width: 100%;
        height: 100%;
    }
`
const SampleList = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    top: 135%;

    img{
        width: 70%;
    }
`

export default props => {
    const menu = ['View', 'Occlusal Contact']
    return (
        <ContainerWrap>
            <SideBar/>
            <SampleImage>
                <img src={sample} alt='sample'/>
            <SampleList>
                <img src={samplelist}/>
            </SampleList>
            </SampleImage>
            <ToolBoxWrap>
            <ViewTool/>
            <div style={{height : '16px'}}/>
            <EditTool/>                
            </ToolBoxWrap>

        </ContainerWrap>
    )
}