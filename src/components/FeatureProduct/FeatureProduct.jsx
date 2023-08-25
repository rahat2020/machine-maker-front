// "use client"
// import { fakeData } from '../../../fakeData'
// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'

// const FeatureProduct = () => {
//     const [data, setData] = useState([])
//     useEffect(() => {
//         setData(fakeData)
//     }, [])
//     console.log(data)

//     return (
//         <div className='mt-3'>
//             <div className="shadow-sm">
//                 <h3 className='text-2xl text-center font-bold text-slate-900'>Featured Category</h3>
//             </div>
//             <div className="flex p-14 items-center gap-10">
//                 {
//                     data.map((item, index) => (
//                         <Link href={`/featurepd/${item.id}`} key={index}>
//                             <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                                 <a href="#">
//                                     <img className="rounded-t-lg object-cover h-40" src={item?.photo} alt={item.title} />
//                                 </a>
//                                 <div className="p-2 text-center">
//                                     <a href="#">
//                                         <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
//                                     </a>

//                                 </div>
//                             </div>
//                         </Link>


//                     ))
//                 }

//             </div>
//         </div>
//     )
// }

// export default FeatureProduct