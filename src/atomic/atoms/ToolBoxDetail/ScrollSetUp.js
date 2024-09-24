import React from 'react'
import styled from 'styled-components'
import Scroller from './Scroller'


const Container = styled.div`
    padding: 8px 6px;
`
const Wrap = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 300;
    justify-content: space-between;    
    input{
        border-radius: 2px;
        border: 1px solid rgb(127,138,187);
        width: 42px;
        height: 22px;
    }
    span{
        margin-left: 4px;
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
            <Wrap>
                <div style={{display : 'flex'}}>
                {color && (
                    <ColorBox color={color}/>
                )}
                <span>{title}</span>
                </div>

                <div style={{display : 'flex', alignItems : 'center'}}>
                <input type='number'/>
                <span>mm</span>
                </div>
            </Wrap>
            <div style={{padding : '10px 0'}}>
            <Scroller/>
            </div>
        </Container>
    )
}