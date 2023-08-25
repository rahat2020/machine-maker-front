import axios from 'axios'
import Link from 'next/link';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession, signOut } from "next-auth/react"

const allproducts = ({ data }) => {
    // console.log('allpddata', data)
    const { data: session } = useSession()

    const handleDelete = async (_id) => {

        try {
            const res = await axios.delete(`http://localhost:5000/product/delete/${_id}`)
            res && toast("Product is deleted")

            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className='p-10  justify-center items-center flex h-auto bg-white'>
            <div className="overflow-x-auto text-black border rounded-md shadow-md w-2/3 ">
                <h2 className='text-center font-bold text-2xl text-slate-900 border-b-2 py-2'>All Products</h2>
                <table className="table text-black">
                    <thead>
                        <tr className='text-black font-bold text-[1rem]'>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th className='text-black font-bold text-1xl'>S/N</th>
                            <th className='text-black font-bold text-1xl'>Title & Category</th>
                            <th className='text-black font-bold text-1xl'>Description</th>
                            <th className='text-black font-bold text-1xl'>Rating</th>
                            <th className='text-black font-bold text-1xl'>Brand</th>
                            <th className='text-black font-bold text-1xl'>Price</th>
                            <th className='text-black font-bold text-1xl'>Actions</th>
                        </tr>
                    </thead>
                    {
                        data.map((item, index) => (
                            <tbody key={index}>
                                <tr className='border-1 border-slate-600'>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.title}</div>
                                                <div className="text-sm text-gray">{item.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.description}
                                    </td>
                                    <td>{item.rating === null ? "N/A" : item.rating}</td>
                                    <td>{item.brand === '' ? "N/A" : item.brand}</td>
                                    <td>{item.price === '' ? "N/A" : item.price}</td>
                                    <th className='flex justify-between items-center w-full'>
                                        {
                                            session?.user?.email ?
                                                <Link href={`/updatepd/${item._id}`}>
                                                    <button className="btn btn-primary text-white font-bold btn-xs">
                                                        Edit
                                                    </button>

                                                    <button className="btn btn-error text-white font-bold btn-xs ms-2"
                                                        onClick={() => handleDelete(item?._id)}>Delete</button>
                                                </Link>
                                                : <button className="btn btn-warning text-black font-bold btn-xs ms-2 disabled" >N/A</button>
                                        }

                                    </th>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
                <ToastContainer />
            </div>
        </div>
    )
}

export default allproducts

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:5000/product/get');
    const data = await res.json();

    return {
        props: { data, },
    };
}