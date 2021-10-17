/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from './animation.json';
import { userService } from '../../../services/user/userService';
import { usePageContext } from '../../wrappers/WebsitePage/context';

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
  height, width, display, item,
}) {
  // Animaçao
  const [animationState, setAnimationState] = React.useState({
    isStopped: false, isPaused: false, direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  // Like
  const { user } = usePageContext();
  const [likes, setLikes] = React.useState({});
  const [totalLikes, setTotalLikes] = React.useState(item.likes.length);

  React.useEffect(() => {
    const likesPost = item.likes.find((like) => like.user === user.id);
    setLikes(likesPost);
    setAnimationState({ ...animationState, direction: likesPost ? 1 : -1 });
  }, []);

  const handleLike = async (id) => {
    const postSelected = await item.likes.find((like) => like.user === user.id);
    const response = await userService.setLike(id);
    if (!response) {
      setLikes(!likes);
      setTotalLikes(totalLikes - 1);
    } else {
      setLikes({ ...likes, postSelected });
      setTotalLikes(totalLikes + 1);
    }
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
          });
          handleLike(item._id);
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
        {totalLikes}
      </p>
    </>
  );
}

export default LikeButton;
