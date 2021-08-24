import React from 'react';
import PropTypes from 'prop-types';
import FAQScreen from '../../src/components/screens/FAQScreen';

export default function FAQPage({ faqCategories }) {
  // REACT WAY
  // const [faqCategories, setFaqCategories] = React.useState([]);

  // React.useEffect(() => {
  //   fetch('https://instalura-api.vercel.app/api/content/faq').then(async (res) => {
  //     const response = await res.json();
  //     return response.data;
  //   })
  //     .then((faqCategoriesFromServer) => {
  //       setFaqCategories(faqCategoriesFromServer);
  //     });
  // });

  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((respostaDoServer) => respostaDoServer.json())
    .then((respostaConvertida) => respostaConvertida.data);
  return {
    props: {
      faqCategories,
    },
  };
}

FAQPage.propTypes = {
  faqCategories: PropTypes.arrayOf.isRequired,
};
