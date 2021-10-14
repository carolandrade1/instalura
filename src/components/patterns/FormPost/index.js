/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import Box from '../../foundation/Layout/Box';
import Button from '../../commons/Button';
import Text from '../../foundation/Text';
import ArrowIcon from '../../commons/utils/ArrowIcon';
import {
  ButtonStyled,
  ButtonStyledFilter,
  Carousel,
  ContainerInputButton,
  FormContainer,
  ImagePreview,
  ImagePreviewContainer,
  TextFieldStyled,
} from './style';
import { userService } from '../../../services/user/userService';
import photoFilter from './style/photoFilter';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent({ onClose }) {
  const router = useRouter();
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [steps, setSteps] = React.useState(1);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);
  const [url, setUrl] = React.useState('');
  const [post, setPost] = React.useState({
    photoUrl: '',
    description: 'Descrição',
    filter: 'none',
  });
  const URLValidation = /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i;

  const handleClick = () => {
    setSteps(2);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setUrl(value);
  };

  const handleUrlImage = () => {
    setPost((prevState) => ({ ...prevState, photoUrl: url }));
  };

  const handleSelectFilter = (name) => {
    setPost((prevState) => ({ ...prevState, filter: name }));
  };

  const handlePost = async () => {
    setIsFormSubmited(true);
    setSubmissionStatus(formStates.LOADING);
    await userService
      .sendPost(post)
      .then(() => {
        setSubmissionStatus(formStates.DONE);
        router.push('/app/feed');
        onClose();
      })
      .catch(() => {
        setSubmissionStatus(formStates.ERROR);
      })
      .finally(() => {
        setIsFormSubmited(false);
      });
  };

  const isValidUrl = URLValidation.test(post.photoUrl);

  // React.useEffect(() => {
  //   if (!isOpen) {
  //     setSubmissionStatus(formStates.DEFAULT);
  //   }
  //   setSteps(1);
  //   setUrl('');
  //   setPost({
  //     photoUrl: '',
  //     description: 'Legenda do post',
  //     filter: 'none',
  //   });
  // }, [isOpen]);

  return (
    <>
      <Button
        ghost
        type="button"
        onClick={() => onClose(true)}
        style={{ textAlign: 'right', padding: '10px 20px 10px 20px' }}
      >
        X
      </Button>
      <ImagePreviewContainer>
        <figure
          className={`filter-${post.filter}`}
          style={{ margin: '0 16px' }}
        >
          <ImagePreview src={post.photoUrl || '/images/waitImage.svg'} alt="" />
        </figure>
      </ImagePreviewContainer>
      <FormContainer>
        {steps === 1 ? (
          <Box display="flex" flexDirection="column" justifyContent="center">
            <ContainerInputButton>
              <TextFieldStyled
                placeholder="URL da imagem"
                color="tertiary.light"
                value={url}
                onChange={handleChange}
                name="url"
                error="URL inválida"
              />
              <ButtonStyled
                variant="secondary.main"
                disabled={!url}
                onClick={handleUrlImage}
              >
                <ArrowIcon id="arrow" />
              </ButtonStyled>
            </ContainerInputButton>

            {!isValidUrl && post.photoUrl && (
              <Text variant="smallestException" color="error.main" role="alert">
                URL inválida
              </Text>
            )}
            <Text variant="paragraph2">
              Formatos suportados: jpg, png, svg e xpto.
            </Text>
          </Box>
        ) : (
          <div>
            <Carousel>
              {photoFilter.map((item) => (
                <div key={item.name}>
                  <ButtonStyledFilter
                    onClick={() => handleSelectFilter(item.name)}
                  >
                    <figure
                      className={`filter-${item.name}`}
                      style={{ margin: '0 16px' }}
                    >
                      <img
                        src={post.photoUrl}
                        alt=""
                        style={{ height: '88px', width: '88px' }}
                      />
                    </figure>
                  </ButtonStyledFilter>

                  <Text variant="profileTextSM" color="tertiary.light">
                    {item.name}
                  </Text>
                </div>
              ))}
            </Carousel>
          </div>
        )}

        <Button
          variant="primary.main"
          type="submit"
          disabled={!url || !post.photoUrl || !isValidUrl}
          fullWidth
          onClick={steps === 1 ? handleClick : handlePost}
        >
          {steps === 1 ? 'Avançar' : 'Postar'}
        </Button>

        {/* {isFormSubmited && submissionStatus === formStates.LOADING && (
          <img
            src="/images/loading.gif"
            alt="Tudo certo!"
            width="20px"
            height="20px"
          />
        )} */}

        {isFormSubmited && submissionStatus === formStates.DONE && (
          <Box display="flex" justifyContent="center">
            <img
              src="/images/success.gif"
              alt="Tudo certo!"
              width="100px"
              height="100px"
            />
          </Box>
        )}

        {isFormSubmited && submissionStatus === formStates.ERROR && (
          <Box display="flex" justifyContent="center">
            <img
              src="/images/erro.gif"
              alt="Ixi, alguma coisa deu errado!"
              width="100px"
              height="100px"
            />
          </Box>
        )}
      </FormContainer>
    </>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormPost({ propsDoModal, onClose }) {
  return (
    <Box
      marginLeft="auto"
      marginRight="auto"
      paddingRight={{ xs: '0', md: '0' }}
      paddingLeft={{ xs: '0', md: '0' }}
      display="grid"
      placeItems="center"
      height="100vh"
    >
      <Box
        display="flex"
        justifyContent="center"
        paddingRight={{ xs: '0', md: '0' }}
        paddingLeft={{ xs: '0', md: '0' }}
        width="375px"
        height="667px"
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          backgroundColor="white"
          height="667px"
          width="375px"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent onClose={onClose} />
        </Box>
      </Box>
    </Box>
  );
}
