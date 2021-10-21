/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { userService } from '../../../../services/user/userService';
import LikeButton from '../../../commons/ButtonLike';
import Text from '../../../foundation/Text';
import { usePageContext } from '../../../wrappers/WebsitePage/context';
import {
  ActionContainer, Header, InfoContainer, PhotoContainer,
} from './style';

export default function Post({ item }) {
  const { user, infoGithub } = usePageContext();

  const hasUserLiked = (postLikes) => postLikes.some((like) => like.user === user.id);

  // Like
  const [likes, setLikes] = React.useState(item.likes);
  const [totalLikes, setTotalLikes] = React.useState(likes.length);
  const [userLiked, setUserLiked] = React.useState(hasUserLiked(likes));

  React.useEffect(() => {
    setTotalLikes(likes.length);
    setUserLiked(hasUserLiked(likes));
  }, [likes]);

  const handleLike = async (id) => {
    const response = await userService.setLike(id);
    if (response) {
      setLikes(response.likes ?? []);
    }
  };

  return (
    <li key={item._id}>
      <Header>
        <div className="info">
          <div className="profilePhoto">
            <img src={`https://github.com/${infoGithub.username}.png`} alt="Imagem do perfil" />
          </div>
          <Text
            tag="p"
            variant="subTitle"
          >
            {user.username}
          </Text>
        </div>
        <div>
          <img src="/images/dot.svg" alt="" />
        </div>
      </Header>
      <PhotoContainer>
        <img src={item.photoUrl} alt="" loading="lazy" />
        <LikeButton
          handleLike={() => handleLike(item._id)}
          totalLikes={totalLikes}
          userLiked={userLiked}
          className="heartbutton"
          height="600px"
          width="375px"
          display="none"
        />
      </PhotoContainer>
      <ActionContainer>
        <div className="icons">
          <div className="iconsBox">
            <LikeButton
              handleLike={() => handleLike(item._id)}
              totalLikes={totalLikes}
              userLiked={userLiked}
              className="heartbutton"
              height="265px"
              width="265px"
              display="initial"
            />
          </div>
          <div className="iconsBox">
            <img src="/images/talk.svg" alt="" />
            <Text tag="p" variant="paragraph2">
              3
            </Text>
          </div>
          <img src="/images/send.svg" alt="" />
        </div>
        <img src="/images/save.svg" alt="" />
      </ActionContainer>
      <InfoContainer>
        <div>
          <img src="/images/instrutores.svg" alt="Imagem dos instrutores do Bootcamp" />
          <Text tag="p">
            Vem novidade por aí!
          </Text>
        </div>
        <Text tag="span" color="tertiary.light">
          Mais
        </Text>
      </InfoContainer>
    </li>
  );
}
