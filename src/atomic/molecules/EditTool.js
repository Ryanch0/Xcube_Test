import React from 'react'
import styled from 'styled-components'
import ToolBox from '../atoms/ToolBox'
import DetailTitle from '../atoms/ToolBoxDetail/DetailTitle'
import ScrollSetUp from '../atoms/ToolBoxDetail/ScrollSetUp'
import link from '../../assets/sidebar/link.png'
import ColorSetUp from '../atoms/ToolBoxDetail/ColorSetUp'

const Container = styled.div`
`
const FigureDetail = styled.div`
    padding: 14px 36px;
`
const Title = styled.h2`
    color: rgb(127,138,187);
    font-size: 14px;
    padding: 6px 0;
`

const ScrollWrap = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgb(244,249,254);
    border-radius: 4px;
`
const LinkWrap = styled.div`
    width: 100%;
`
const Box = styled.div`
    width: 10px;
    height: 22px;
    border: 1px solid rgba(0,0,0,0.3);
    border-left : none;
    ${props => props.first && `
        border-radius : 0 2px 0 0;
        border-bottom : none;
        margin-bottom : 12px;
    `}
    ${props => props.second && `
        border-radius : 0 0 2px 0;
        border-top : none;
        margin-top : 12px;
    `}
`



export default props => {
    const menu = ['Edit', 'Margin', 'Cement Gap']
    return (
        <Container>
            <ToolBox menu={menu}>
                <DetailTitle title='Cement Gap Setting' />
                <FigureDetail>
                    <Title>Area and Style Settings</Title>
                    <ColorSetUp color='#E85D57' title='Cement Gap Free'/>
                    <ColorSetUp color='#162B46' title='Cement Gap'/>

                    <Title>Distance-based Selection</Title>
                    <ScrollSetUp
                        color='#90C5EB'
                        title='Form Margin' />
                    <Title>Cement Gap Adjustment</Title>
                    <ScrollSetUp title='Cement Gap' />

                    <ScrollWrap>
                        <LinkWrap>
                            <ScrollSetUp title='Axial' />
                            <ScrollSetUp title='Radius' />
                        </LinkWrap>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Box first='true' />
                            <div style={{paddingLeft : '1px'}}>
                                <img src={link}
                                    style={{ width: '18px', transform: 'rotate(90deg)' }}
                                />
                            </div>
                            <Box second='true' />
                        </div>
                    </ScrollWrap>
                </FigureDetail>
            </ToolBox>
        </Container>
    )
}