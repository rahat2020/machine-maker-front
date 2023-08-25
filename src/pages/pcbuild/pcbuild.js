import Link from 'next/link'
import React from 'react'

const PcBuild = ({ data }) => {
  console.log('from pc-build', data)
  return (
    <div className=" mx-auto px-14 py-6 bg-white">
      <div className="shadow-sm">
        <h3 className='text-2xl text-center font-bold text-slate-900'>Build your machine</h3>
      </div>
      <div style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-10 pb-10 lg:pt-10 lg:pb-20" style={{ cursor: 'auto' }}>
          {
            data?.map((item, i) => (

              <div className="p-6 bg-gray-100 rounded-lg h-[350px]">
                <div className="mb-5">
                  <img src={item.photo} alt="photo" className='w-20 h-20 rounded-md items-center flex justify-center object-cover' />
                </div>
                <div className="">
                  <h3 className="text-lg font-bold mb-2 text-black">
                    {i + 1}. {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                  <Link href={`/pcbuild/${item.title}`}
                    key={i}>
                    <button className='px-3 py-1 bg-blue-700 font-bold text-white rounded-md'>Choose</button>
                  </Link>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default PcBuild

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:5000/category/get')
  const data = await res.json()
  return {
    props: { data }
  }
}