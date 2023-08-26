import Link from 'next/link'
import React, { useState } from 'react';
import { useSession, signOut } from "next-auth/react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { minusOneFromCart } from '@/redux/Cart/cartSlice';
import { useRouter } from 'next/router';

const Navbar = () => {
    const { data: session } = useSession()
    const newState = useSelector((state) => state?.cart.products)
    const total = useSelector((state) => state?.cart.total)
    // console.log('from header', session?.user?.email)
    // console.log('from navbar', newState)
    // console.log('from navbar length', newState?.length)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const dispatch = useDispatch()
    const handleRemove = (item) => {
        const _id = item._id;
        // console.log('form navbar cart id', _id);
        dispatch(minusOneFromCart(_id))
        toast("Product removed from cart")
    }

    const router = useRouter();
    const handleComplete = () => {
        toast("Thank you for choosing your new product")
        router.push("/cart")
    }

    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost normal-case text-xl text-white">Machine Maker</Link>
                </div>


                <div className="flex-none gap-2">
                    <ul className="menu menu-horizontal px-1 text-white hover:text-white">
                        <li className='flex justify-center items-center ms-1'>
                            <details>
                                <summary className='py-1 bg-slate-100 hover:bg-slate-100 text-black font-bold'>
                                    Category
                                </summary>
                                <ul className="p-2 bg-slate-950 text-white w-40">
                                    <li><Link href="/category/cpu">CPU / Processor</Link></li>
                                    <li><Link href="/category/motherboard">Motherboard</Link></li>
                                    <li><Link href="/category/ram">RAM</Link></li>
                                    <li><Link href="/category/power_supply">Power Supply Unit</Link></li>
                                    <li><Link href="/category/monitor">Monitor</Link></li>
                                    <li><Link href="/category/mouse">Mouse</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li className='flex justify-center items-center ms-1'>
                            <Link href="/featurepd/allproducts" className='py-1 bg-slate-100 hover:bg-slate-100'>
                                <button className='rounded-md text-black font-bold hover:bg-slate-100 '>All Products</button>
                            </Link>
                        </li>
                        <li className='flex justify-center items-center ms-1'>
                            <Link href="/featurepd/addproduct" className='py-1 bg-slate-100 hover:bg-slate-100'>
                                <button className='rounded-md text-black font-bold hover:bg-slate-100 '>Add Products</button>
                            </Link>
                        </li>
                        <li className='flex justify-center items-center ms-1'>
                            <Link href="/pcbuild/pcbuild" className='py-1 bg-slate-100 hover:bg-slate-100'>
                                <button className='rounded-md text-black font-bold hover:bg-slate-100 '>PC Builder</button>
                            </Link>
                        </li>
                        <li className='flex justify-center items-center ms-1'>
                            {/* <Link href="/cart" className='py-1'> */}
                            <div className="indicator" >
                                <span className="indicator-item badge badge-secondary">{newState?.length}</span>
                                <button className="btn" ><ShoppingCartIcon onClick={openModal} /></button>
                                {/* <button className="btn" ><ShoppingCartIcon onClick={() => window?.my_modal_1?.showModal()} /></button> */}
                            </div>
                            {/* </Link> */}
                        </li>

                    </ul>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={session?.user ? session?.user?.image : "https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg"} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                            {
                                session?.user?.email ?
                                    <>
                                        <li onClick={() => signOut()} className='font-bold cursor-pointer text-xl'>Logout</li>
                                        <li className='font-bold cursor-pointer text-xl'>{session?.user.name}</li>
                                    </>
                                    :
                                    <li className='font-bold cursor-pointer text-xl'><Link href="/login">Login</Link></li>
                            }
                        </ul>
                    </div>
                </div>
            </div>


            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-xl mb-4 text-black font-bold uppercase text-center border-b-2">{session?.user.name} your cart product</h2>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table border">
                            <thead>
                                <tr className='border'>
                                    <th className='text-black font-bold '>S/N</th>
                                    <th className='text-black font-bold '>Name</th>
                                    <th className='text-black font-bold text-end'>Price</th>
                                    <th className='text-black font-bold '>Actions</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    newState?.map((item, index) => (
                                        <>
                                            <tr className="" key={index}>
                                                <th className='text-gray-400 font-bold'>{index + 1}</th>
                                                <td className='text-gray-400 font-bold'>{item?.title}</td>
                                                <td className='text-gray-400 font-bold text-end'>{item?.price}<strong>৳</strong> </td>
                                                <td>
                                                    <CloseIcon className='text-gray-400 cursor-pointer font-bold' onClick={() => handleRemove(item)} />
                                                </td>
                                            </tr>

                                        </>
                                    ))
                                }
                                <tr className=''>
                                    <td></td>
                                    <td></td>
                                    <td className='text-center font-bold'><strong>Total:</strong> {total}<strong>৳</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    {
                        newState?.length === 5 ?
                                <button onClick={handleComplete} className="mt-4 bg-orange-500 px-2 text-white py-1 rounded-md font-bold">
                                    Complete builder
                                </button>
                            :
                            <button className="mt-4 bg-gray-500 px-2 text-white py-1 rounded-md font-bold disabled">
                               Select at least 5 products
                            </button>
                    }
                    <button onClick={closeModal} className="mt-4 bg-blue-500 px-2 text-white py-1 rounded-md font-bold">
                        Close Modal
                    </button>
                </div>
            </Modal>


            <ToastContainer />
        </div>
    )
}

export default Navbar
