import FeatureProduct from '@/components/FeatureProduct/FeatureProduct'
import HomeProduct from '@/components/HomeProduct/HomeProduct'
import React from 'react'
import FeatureHomeProduct from './featurepd/featureProduct'
import CategoryHome from './category/category'


const HomePage = ({ data, category }) => {
  // console.log('props', category)
  
  return (
    <div className='text-black'>
      <CategoryHome category={category}/>
      <FeatureHomeProduct data={data} />
      {/* <FeatureProduct/> */}
      {/* <HomeProduct /> */}
    </div>
  )
}

export default HomePage

export const getStaticProps = async () => {

  // fetching feature products items
  const res = await fetch("https://machine-maker.vercel.app/product/get");
  const data = await res.json();

  // fetching category items
  const cat = await fetch("https://machine-maker.vercel.app/category/get");
  const category = await cat.json();

  return {
    props: { data, category },
  };
};

