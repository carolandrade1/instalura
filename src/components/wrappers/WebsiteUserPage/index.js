/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import MenuUser from '../../commons/MenuUser';
import Modal from '../../commons/Modal';
import Box from '../../foundation/Layout/Box';
import SEO from '../../commons/SEO';
import { WebsitePageContextProvider } from '../WebsitePage/context';
import FormPost from '../../patterns/FormPost';

export { WebsitePageContextProvider } from '../WebsitePage/context';

export default function WebsiteUserPageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
  contextValues,
}) {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <WebsitePageContextProvider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
        ...contextValues,
      }}
    >
      <SEO {...seoProps} />

      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="space-between"
        {...pageBoxProps}
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(propsDoModal) => (
            <FormPost propsDoModal={propsDoModal} onClose={() => setModalState(false)} />
          )}
        </Modal>
        {menuProps.display && (
        <MenuUser contextValues={contextValues} onPostClick={() => setModalState(true)} />
        )}
        {children}
      </Box>
    </WebsitePageContextProvider>
  );
}

WebsiteUserPageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
};

WebsiteUserPageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
