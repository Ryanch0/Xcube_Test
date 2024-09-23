import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Img = styled.img`
    width: 24px;
    height: 24px;
    margin-left: 28px;
`
const ButtonWrap = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    &:hover{
        background-color: rgb(43,53,72);
        button{
            color: white;
        }
        
    }
`
const Count = styled.div`
    position: absolute;
    right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: rgb(99,143,247);
    font-size: 12px;
    color: white;
`

const Button = styled.button`
    width: 50%;
    height: 40px;
    background-color: transparent;
    font-size: 13px;
    font-weight: 400;
    text-align: start;
`

export default props => {
    const { src,count } = props
    return (
        <Container>
            <ButtonWrap>
                <Img src={src} />
                {count && (
                   <Count>{count}</Count>
                )}
            <Button>
                {props.children}
            </Button>
            </ButtonWrap>
        </Container>
    )
}