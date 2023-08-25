import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const categorypd = ({ product }) => {
  console.log('product', product)
  const router = useRouter()
  // console.log('router', router.asPath)
  // console.log('router', router.asPath.slice(10, 26))
  return (
    <div className='h-auto'>
      <div className="bg-white py-24 sm:py-32">
          <div className="shadow-sm my-10 ">
            <h3 className='text-3xl uppercase text-center font-bold text-slate-900'>{router?.asPath.slice(10, 26)} category products</h3>
          </div>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap gap-6">

            {
              product?.map((item, index) => (
                <Link href={`/featurepd/${item?._id}`} key={index}>
                  <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[530px]">
                    <img className="rounded-t-lg h-[300px] w-[400px]" src={item?.photo} alt="img" />
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                      <p className=" font-normal text-gray-700 dark:text-gray-400"><strong>Category: </strong> {item.category}</p>
                      {
                        item.rating === "4" &&
                        <p className=""><strong>Rating: </strong> {item.rating === "4" ? "⭐⭐⭐⭐" : "⭐"}</p>
                      }
                      {
                        item.rating === "5" &&
                        <p className="py-1"><strong>Rating: </strong> {item.rating === "5" ? "⭐⭐⭐⭐⭐" : "⭐"}</p>
                      }
                      {
                        item.rating === "3" &&
                        <p className="py-1"><strong>Rating: </strong> {item.rating === "3" ? "⭐⭐⭐" : "⭐"}</p>
                      }
                      {
                        item.rating === "2" &&
                        <p className="py-1"><strong>Rating: </strong> {item.rating === "2" ? "⭐⭐" : "⭐"}</p>
                      }
                      <p className="font-normal text-gray-700 dark:text-gray-400"><strong>Model: </strong>{item.model}</p>
                      <p className="font-normal text-gray-700 dark:text-gray-400"><strong>Stock: </strong>{item.inStock}</p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Price: </strong>{item.price}৳</p>
                    </div>
                  </div>
                </Link>
              ))
            }



          </div>
        </div>
      </div>


    </div>
  )
}

export default categorypd

export const getStaticPaths = async () => {
  const res = await fetch('https://machine-maker.vercel.app/product/get');
  const pd = await res.json();

  const paths = pd.map((item) => ({
    params: { catpd: item.category }
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`https://machine-maker.vercel.app/product/filtered?category=${params.catpd}`);
  const data = await res.json();
  console.log('single_data', data);

  return {
    props: {
      product: data
    },
  };
};
