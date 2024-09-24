import React from 'react'
import styled from 'styled-components'
import paint from '../../../assets/sidebar/paint.png'

const Container = styled.div`
    padding: 8px 6px;
    font-weight: 300;
    font-size: 13px;
`
const TitleWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`
const ColorWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 10px 0 0 0;
    input{
        border-radius: 2px;
        border: 1px solid rgb(127,138,187);
        width: 52px;
        height: 22px;
        font-size: 10px;
        text-align: center;
    }
    div{
        background-color: rgb(209,223,248);
        width: 20px;
        height: 20px;
        padding: 1.5px;
    }
    img{
        width: 100%;
    }
`
const ColorBox = styled.div`
    background-color: ${props => props.color};
    width: 12px;
    height: 12px;
`

export default props => {
    const {color, title} = props

    return (
        <Container>
            <TitleWrap>
                <ColorBox color={color}/>
                <span>{title}</span>
            </TitleWrap>
            <ColorWrap>
                <span>Color :</span>
                <input placeholder='#444444' />
                <span>Select Area :</span>
                <div>
                <img src={paint}/>
                </div>
            </ColorWrap>
        </Container>
    )
}