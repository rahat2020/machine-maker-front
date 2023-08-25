import React from 'react'

const singleProduct = ({ product }) => {
  console.log('product', product)
  return (
    <div>
      <h1>{product?.title}</h1>
      <h1>{product?._id}</h1>
    </div>
  )
}

export default singleProduct

export const getStaticPaths = async () => {
  const res = await fetch('https://machine-maker.vercel.app/product/get');
  const pd = await res.json();

  const paths = pd.map((item) => ({
    params: { singlepd: item._id }
  }));
  // const paths = pd.map((item) => {
  //   params: { singlepd: item._id }
  // })
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const { params } = context
  const res = await fetch(`https://machine-maker.vercel.app/product/get/${params?.singlepd}`);
  const data = await res.json();
  console.log('single_data', data);

  return {
    props: {
      product: data
    },
  };
};
