import React from 'react'
import styled from 'styled-components'
import ToolBox from '../atoms/ToolBox'

const Container = styled.div`
    position: absolute;
    bottom: 30px;
    right: 30px;
`


export default props => {
    const menu = ['Edit', 'Margin', 'Cement Gap']
    return (
        <Container>
            <ToolBox menu={menu}>

            </ToolBox>
        </Container>
    )
}