/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from './animation.json';

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: 0;
  border-radius: 100%;
  z-index: 0;

  .animation {
    pointer-events: none;
  }
`;

function LikeButton({
  height, width, display,
}) {
  const [isLiked, setLikeState] = React.useState(false);
  const [animationState, setAnimationState] = React.useState({
    isStopped: true, isPaused: false, direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <ButtonWrapper
        onClick={() => {
          const reverseAnimation = -1;
          const normalAnimation = 1;
          setAnimationState({
            ...animationState,
            direction: animationState.direction === normalAnimation
              ? reverseAnimation
              : normalAnimation,
            isStopped: false,
          });
          setLikeState(!isLiked);
        }}
      >
        <div className="animation">
          <Lottie
            options={defaultOptions}
            height={height}
            width={width}
            direction={animationState.direction}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </div>
      </ButtonWrapper>
      <p style={{ display: `${display}` }}>
        {isLiked ? 1 : 0}
      </p>
    </>
  );
}

export default LikeButton;
