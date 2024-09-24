import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 550;
    padding: 16px 0 0 18px;
`
const ColorBar = styled.div`
    background-color: rgb(195,209,241);
    width: 6px;
    height: 18px;
`
export default props => {
    return (
        <Wrap>
            <ColorBar/>
            <span>{props.title}</span>
        </Wrap>
    )
}