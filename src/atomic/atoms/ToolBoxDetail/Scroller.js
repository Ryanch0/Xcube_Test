import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const SliderContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'fillPercentage',
  })`
    width: 100%;
    height: 8px;
    background: linear-gradient(
      to right,
      rgb(209,223,248) ${(props) => props.fillPercentage}%,
      rgb(233,234,237) ${(props) => props.fillPercentage}% 
    );
    position: relative;
    border-radius: 5px;

  `;
  
const SliderHandle = styled.div`
  width: 16px;
  height: 16px;
  background-color: rgb(123,134,185);
  border-radius: 50%;
  position: absolute;
  top: -3.5px; 
  left: ${(props) => props.position}px;
  cursor: pointer;
`;

export default props => {
    const [position, setPosition] = useState(100) //하드코딩
    const [sliderWidth, setSliderWidth] = useState(0);
    const scrollerRef = useRef(null)

    useEffect(() => {
        const updateSliderWidth = () => {
          if (scrollerRef.current) {
            setSliderWidth(scrollerRef.current.getBoundingClientRect().width);
          }
        };
    
        updateSliderWidth(); // 초기 슬라이더 너비 
        window.addEventListener('resize', updateSliderWidth); // 윈도우 리사이즈에 따른 슬라이더 너비 업데이트
    
        return () => {
          window.removeEventListener('resize', updateSliderWidth); // 클린업
        };
      }, []);
    

    const handleScroll = (e) => {
        const scroller = scrollerRef.current
        const scrollerRect = scroller.getBoundingClientRect()
        const startX = e.clientX
        const handleStartX = position

        const onMouseMove = (moveEvent) => {
            const dx = moveEvent.clientX - startX; // 마우스가 움직인 거리
            let newPosition = handleStartX + dx; // 새로운 핸들의 위치 계산

            // 슬라이더 범위를 벗어나지 않도록 제약
            if (newPosition < 0) newPosition = 0;
            if (newPosition > scrollerRect.width - 16) newPosition = scrollerRect.width - 16;

            setPosition(newPosition); // 핸들의 위치 업데이트
        };
        const onMouseUp = () => {
            // 마우스 이동과 마우스 업 이벤트 리스너 제거
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
          };
      
          // 마우스 이동과 마우스 업 이벤트 리스너 등록
          window.addEventListener('mousemove', onMouseMove);
          window.addEventListener('mouseup', onMouseUp);
        };

    const fillPercentage = (position / (sliderWidth - 16)) * 100; // 트랙 너비에서 핸들 크기를 뺀 값으로 비율 계산

    return (
        <SliderContainer ref={scrollerRef} fillPercentage={fillPercentage}>
            <SliderHandle
                position={position}
                onMouseDown={handleScroll}
            />
        </SliderContainer>
    )
}