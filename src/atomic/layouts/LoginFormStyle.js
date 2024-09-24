import styled from 'styled-components'
import { input_color, MAIN_BG_COLOR } from '../../const/color'
import eyeopen from '../../assets/eyeopen.png'
import eyeclose from '../../assets/eyeclose.png'

export const ContainerWrap = styled.div`
    background-color: ${MAIN_BG_COLOR};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    width: 400px;
    padding: 20px 16px 50px 16px;
`
export const Header = styled.header`
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
export const FormSection = styled.form`
    display: flex;
    flex-direction: column;
    width: calc(80% - 18px);
    label{
        display: none;
    }
    
`
export const Input = styled.input`
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
export const Eye = styled.div`
    background-image: url(${props => props.$open ? eyeopen : eyeclose});
    background-size: contain;
    position: absolute;
    top: 4px;
    right: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`
export const CheckBoxWrap = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 200;
`
export const CheckBox = styled.div`
    width: 16px;
    height: 16px;
    margin-right: 6px;
    border-radius: 50%;
    background-color: ${input_color};
    cursor: pointer;
`
export const Check = styled.img`
    position: absolute;
    cursor: pointer;
    width: 16px;
    height: 16px;
`
export const LoginButton = styled.button`
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
export const NavigationList = styled.li`
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
export const SnsText = styled.div`
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
export const SnsImage = styled.img`
    width: 32px;
    cursor: pointer;
`
