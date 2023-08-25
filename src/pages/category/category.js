import Link from 'next/link'
import React from 'react'

const CategoryHome = ({ category }) => {
    // console.log('CategoryHome', category)

    const handleSubmit = () => {
        console.log('yup')
    }
    
    return (
        <div className=" mx-auto px-14 py-6 bg-white">
            <div className="shadow-sm">
                <h3 className='text-2xl text-center font-bold text-slate-900'>Featured Category</h3>
            </div>
            <div style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-10 pb-10 lg:pt-10 lg:pb-20" style={{ cursor: 'auto' }}>
                    {
                        category?.map((item, i) => (
                            <Link href={`/category/${item.title}`}
                                onClick={handleSubmit} key={i}>
                                <div className="p-6 bg-gray-100 rounded-lg h-[330px]">
                                    <div className="mb-5">
                                        <img src={item.photo} alt="photo" className='w-20 h-20 rounded-md items-center flex justify-center object-cover' />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">
                                        {i + 1}. {item.title}
                                    </h3>
                                    <p className="text-sm leading-6 text-gray-600">
                                       {item.description}
                                    </p>
                                </div>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </div>

    )
}

export default CategoryHome
