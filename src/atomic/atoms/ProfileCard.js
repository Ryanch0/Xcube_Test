import React from 'react'
import styled from 'styled-components'
import avatar from '../../assets/sidebar/avatar.png'
import cancel from '../../assets/sidebar/cancel.png'


const Container = styled.div`
    width: 100%;
    position: absolute;
    top: 90%;
    hr{
        height: 1px;
        width: 85%;
    }

`
const Wrap = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 6px 24px;

    img{
        width: 36px;
    }
`
const UserInfo = styled.div`
width: 100%;
line-height: 18px;
padding-top: 2px;

    h2{
        font-size: 14px;
        font-weight: 300;
    }
    p{
        font-size: 12px;
        color: rgba(169, 169, 169, 1);
    }
`
export default props => {
    return (
        <Container>
            <hr />
            <Wrap>
                <img src={avatar} alt='avatar' />
                <UserInfo>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems : 'center'}}>
                        <h2>GUEST01</h2>
                        <img
                            src={cancel}
                            alt='cancelButton'
                            style={{ width: '12px', height : '12px', cursor : 'pointer'}}
                            onClick={()=>{
                                alert('로그아웃 버튼입니다.')
                            }}
                        />
                    </div>
                    <p>X-Cube</p>
                </UserInfo>
            </Wrap>
        </Container>
    )
}