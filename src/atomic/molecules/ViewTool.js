import React from 'react'
import styled from 'styled-components'
import ToolBox from '../atoms/ToolBox'
import CheckBox from '../atoms/ToolBoxDetail/CheckBox'
import DetailTitle from '../atoms/ToolBoxDetail/DetailTitle'
import Scroller from '../atoms/ToolBoxDetail/Scroller'

const Container = styled.div`
`
const FigureDetail = styled.div`
    padding: 14px 36px;
`

const Hr = styled.hr`
    height: 1px;
    border: none;
    background-color: rgba(0,0,0,0.15);
`
const ColorBar = styled.div`
      width: 100%;
      height: 15px;
      background: linear-gradient(to right, red, green, blue);
      border: none;
      opacity: 0.9;
      margin-bottom: 20px;
`
const TextBox = styled.div`
    line-height: 24px;
    font-size: 13px;
    font-weight: 300;
    padding: 0 6px;
`

const ScrollBox = styled.div`
    background-color: rgb(244,249,254);
    width: 100%;
    height: 65px;
    border-radius: 6px;
    padding: 10px 12px;
    margin-top: 10px;

    p{
        font-size: 13px;
        font-weight: 300;
        padding-bottom: 16px;
    }
`
export default props => {
    const menu = ['View', 'Occlusal Contact']
    const checkboxData = ['Occlusion', 'Adjacent teeth', 'Include healty']
    return (
        <Container>
            <ToolBox menu={menu}>
                <DetailTitle title='Occlusal Contact Visualization' />
                <FigureDetail>
                    <ColorBar />
                    <Hr />
                    <TextBox>
                        <p>Opposing tooth : -0.26</p>
                        <p>Mesial : -0.29</p>
                        <p>Distal : -0.06</p>
                    </TextBox>
                    <Hr />
                    <CheckBox data={checkboxData} />
                    <ScrollBox>
                        <p>Opacity</p>
                        <Scroller />
                    </ScrollBox>
                </FigureDetail>

            </ToolBox>
        </Container>
    )
}