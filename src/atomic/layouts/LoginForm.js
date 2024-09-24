import React, { useState } from 'react'
import logoIcon from '../../assets/logoIcon.svg'
import check from '../../assets/check.png'
import apple from '../../assets/sns/apple.png'
import facebook from '../../assets/sns/facebook.png'
import google from '../../assets/sns/google.png'
import kakao from '../../assets/sns/kakao.png'
import naver from '../../assets/sns/naver.png'
import { useNavigate } from 'react-router-dom'
import { Check, CheckBox, CheckBoxWrap, Container, ContainerWrap, Eye, FormSection, Header, Input, LoginButton, NavigationList, SnsImage, SnsText } from './LoginFormStyle'


export default props => {
    const [autoLogIn, setAutoLogIn] = useState(false)
    const [eye, setEye] = useState(false)
    const [pwtype, setPwtype] = useState('password')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    return (
        <ContainerWrap>
            <Container>
                <Header>
                    <img src={logoIcon} alt='logoIcon' />
                    <h2>로그인</h2>
                </Header>
                <FormSection>
                <label htmlFor='email'>이메일</label>
                    <Input
                        id='email'
                        placeholder='이메일'
                        type='email'
                        value={email}
                        autoComplete='username'
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }} />
                    <div style={{ position: 'relative' }}>
                    <label htmlFor='password'>비밀번호</label>
                        <Input
                            id='password'
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
                    <LoginButton 
                        onClick={()=>{navigate('/detail')}}
                        type='submit'
                        >로그인</LoginButton>
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