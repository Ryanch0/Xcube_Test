import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    padding: 4px 2px;
    font-size: 13px;
    font-weight: 300;
`
export default props => {
    const { data } = props
    return (
        <>
            {data.map(item => {
                return (
                    <Wrap key={item}>
                        <input type='checkbox' />
                        <span>{item}</span>
                    </Wrap>

                )
            })}
        </>
    )
}