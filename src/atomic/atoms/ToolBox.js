import React, { useState } from 'react'
import styled from 'styled-components'
import { tab_color } from '../../const/color'

const Container = styled.div`
    width: 300px;
    background-color: white;
    border-radius: 6px;
`
const MenuTab = styled.li`
  display: flex;
  justify-content: space-around;
  background-color: ${tab_color};
  color: white;
  border-radius: 6px 6px 0 0;
  font-size: 14px;

  ul{
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 40px;
    cursor: pointer;
  }
  
`
const Selected = styled.div`
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 20px 10px 20px;
    border-color: transparent transparent white transparent;
`

export default props => {
    const { menu } = props
    const [menuSelected, setMenuSelected] = useState(menu[1]) // 하드코딩
    return (
        <Container>
            <MenuTab>
                {menu.map(tab => {
                    return (
                        <ul
                            key={tab}
                            onClick={() => { setMenuSelected(tab) }}>
                            {tab}
                            {menuSelected === tab && (
                                <Selected />
                            )}
                        </ul>
                    )
                })}
            </MenuTab>
                {props.children}
        </Container>
    )
}