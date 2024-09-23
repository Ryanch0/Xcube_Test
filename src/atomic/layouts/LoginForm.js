import React, { useState } from 'react'
import styled from 'styled-components'
import logoIcon from '../../assets/logoIcon.svg'
import check from '../../assets/check.png'
import eyeopen from '../../assets/eyeopen.png'
import eyeclose from '../../assets/eyeclose.png'
import apple from '../../assets/sns/apple.png'
import facebook from '../../assets/sns/facebook.png'
import google from '../../assets/sns/google.png'
import kakao from '../../assets/sns/kakao.png'
import naver from '../../assets/sns/naver.png'
import { input_color, MAIN_BG_COLOR } from '../../const/color'

const ContainerWrap = styled.div`
    background-color: ${MAIN_BG_COLOR};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    width: 400px;
    padding: 20px 16px 50px 16px;
`
const Header = styled.header`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 120px;

   img{
    width: 30px;
    height: 40px;
    margin-bottom: 4px;
   }

   h2{
    font-size: 18px;
    font-weight: 500;
   }
`
const FormSection = styled.form`
    display: flex;
    flex-direction: column;
    width: calc(80% - 18px);
    
`
const Input = styled.input`
    background-color: ${input_color};
    font-size: 14px;
    border: none;
    border-radius: 10px;
    margin-bottom: 12px;
    padding: 6px 8px;
    width: 100%;
    height: 30px;

    &::-webkit-input-placeholder{
        color: rgba(149, 149, 149, 1);
        font-size: 12px;
        font-weight: 300;
    }
`
const Eye = styled.div`
    background-image: url(${props => props.$open ? eyeopen : eyeclose});
    background-size: contain;
    position: absolute;
    top: 4px;
    right: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`
const CheckBoxWrap = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 200;
`
const CheckBox = styled.div`
    width: 16px;
    height: 16px;
    margin-right: 6px;
    border-radius: 50%;
    background-color: ${input_color};
    cursor: pointer;
`
const Check = styled.img`
    position: absolute;
    cursor: pointer;
    width: 16px;
    height: 16px;
`
const LoginButton = styled.button`
    background-color: rgba(10, 16, 37, 1);
    width: 100%;
    padding: 8px 0;
    margin-top: 28px;
    border-radius: 10px;
    color: white;
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
`
const NavigationList = styled.li`
    display: flex;
    gap: 36px;
    justify-content: center;
    font-size: 12px;
    font-weight: 300;
    padding: 16px 0;

    a{
        text-decoration: none;
        color: black;
    }
`
const SnsText = styled.div`
    display: flex;
    width: calc(80% - 18px);
    font-size: 12px;
    color: rgba(156, 156, 156, 1);
    font-weight: 300;
    margin-top: 30px;
    hr{
        height: 1px;
        border: none;
        background-color: rgba(156, 156, 156, 1);;
        width: 30%;
    }
`
const SnsImage = styled.img`
    width: 32px;
    cursor: pointer;
`

export default props => {
    const [autoLogIn, setAutoLogIn] = useState(false)
    const [eye, setEye] = useState(false)
    const [pwtype, setPwtype] = useState('password')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <ContainerWrap>
            <Container>
                <Header>
                    <img src={logoIcon} alt='logoIcon' />
                    <h2>로그인</h2>
                </Header>
                <FormSection>
                    <Input
                        placeholder='이메일'
                        type='email'
                        value={email}
                        autoComplete='username'
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }} />
                    <div style={{ position: 'relative' }}>
                        <Input
                            placeholder='비밀번호' 
                            type={pwtype} 
                            value={password}
                            autoComplete='current-password'
                            onChange={(event) => {
                                setPassword(event.target.value)
                             }}/>
                        <Eye
                            $open={eye}
                            onClick={() => {
                                setEye(!eye)
                                if (eye) {
                                    setPwtype('password')
                                } else {
                                    setPwtype('')
                                }
                            }} />
                    </div>
                    <CheckBoxWrap>
                        {autoLogIn && (
                            <Check src={check} onClick={() => {
                                setAutoLogIn(false)
                            }} />
                        )}
                        <CheckBox onClick={() => {
                            setAutoLogIn(true)
                        }} />
                        <span>자동 로그인</span>
                    </CheckBoxWrap>
                    <LoginButton type='submit'>로그인</LoginButton>
                    <NavigationList>
                        <ul><a href='/#'>아이디 찾기</a></ul>
                        <ul><a href='/#'>비밀번호 찾기</a></ul>
                        <ul><a href='/#'>회원가입</a></ul>
                    </NavigationList>
                </FormSection>
               <SnsText>
                <hr/>
                <span>SNS 계정으로 로그인</span>
                <hr/>
               </SnsText>
               <div style={{display : 'flex', gap : '18px', paddingTop : '12px'}}>
                    <SnsImage src={kakao}/>
                    <SnsImage src={naver}/>
                    <SnsImage src={facebook}/>
                    <SnsImage src={google}/>
                    <SnsImage src={apple}/>
               </div>
            </Container>
        </ContainerWrap>
    )
}