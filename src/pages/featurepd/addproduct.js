import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const addproduct = () => {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [photo, setPhoto] = useState('')
    const [inStock, setInStock] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    const [features, setFeatures] = useState('')
    const [model, setModel] = useState('')
    const [brand, setBrand] = useState('')
    const [resulations, setResulations] = useState('')
    const [price, setPrice] = useState('')

    const handleSumit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", photo);
        data.append("upload_preset", "upload");
        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/rahatdev1020/image/upload", data)
        const { url } = uploadRes.data
        const object = {
            title,
            category,
            inStock,
            description,
            rating,
            features,
            model,
            brand,
            resulations,
            price,
            photo: url
        }

        console.log(object)
        try {
            const res = await axios.post("https://machine-maker.vercel.app/product/add", object)
            console.log('res', res)
            toast("Product is created")
            setTimeout(() => {
                window.location.reload()
            }, 2000)

        } catch (err) {
            console.log(err)
        }
    }


    // CATEGORY FORM
    const [catTitle, setCatTitle] = useState('')
    const [catDescription, setCatDescription] = useState('')
    const [catPhoto, setCatPhoto] = useState('')

    const handleCatSubmit = async () => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", catPhoto);
        data.append("upload_preset", "upload");
        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/rahatdev1020/image/upload", data)
        const { url } = uploadRes.data
        
        const object = {
            title:catTitle,
            description:catDescription,
            photo: url
        }

        console.log(object)
        try {
            const res = await axios.post("https://machine-maker.vercel.app/category/add", object)
            console.log('res', res)
            toast("Category is created")
            setTimeout(() => {
                window.location.reload()
            }, 2000)

        } catch (err) {
            console.log(err)
        }
    }
    // tab activation
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="p-10 min-h-screen bg-base-200">
                <div className=" flex-col lg:flex-row-reverse justify-center shadow-2xl">
                    <div className="rounded flex justify-center w-full shadow-2xl bg-base-100">
                        <div className="p-8">
                            <div className="tabs">
                                <div className="tab">
                                    <button
                                        className={`tab-button ${activeTab === 'tab1' ? 'active text-white font-bold text-2xl' : 'text-2xl'}`}
                                        onClick={() => handleTabClick('tab1')}
                                    >
                                        Add new product
                                    </button>
                                </div>
                                <div className="tab">
                                    <button
                                        className={`tab-button ${activeTab === 'tab2' ? 'active text-white font-bold text-2xl' : 'text-2xl'}`}
                                        onClick={() => handleTabClick('tab2')}
                                    >
                                        Add new category
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4 p-4 border border-slate-600 rounded-md">
                                {
                                    activeTab === 'tab1' &&
                                    <div className="p-5 w-full">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Title</span>
                                            </label>
                                            <input type="text" placeholder="title" className="input input-bordered"
                                                onChange={(e) => setTitle(e.target.value)} />
                                        </div>

                                        <div className="flex w-full">
                                            <div className="form-control ">
                                                <label className="label">
                                                    <span className="label-text">Model</span>
                                                </label>
                                                <input type="text" className="input input-bordered w-full" onChange={(e) => setModel(e.target.value)} />
                                            </div>
                                            <div className="form-control ">
                                                <label className="label">
                                                    <span className="label-text">Brand</span>
                                                </label>
                                                <input type="text" className="input input-bordered w-full" onChange={(e) => setBrand(e.target.value)} />
                                            </div>
                                            <div className="form-control ">
                                                <label className="label">
                                                    <span className="label-text">Resulations</span>
                                                </label>
                                                <input type="text" className="input input-bordered w-full" onChange={(e) => setResulations(e.target.value)} />
                                            </div>
                                            <div className="form-control ">
                                                <label className="label">
                                                    <span className="label-text">Price</span>
                                                </label>
                                                <input type="text" className="input input-bordered w-full" onChange={(e) => setPrice(e.target.value)} />
                                            </div>

                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Photo</span>
                                            </label>
                                            <input type="file" className="file-input file-input-bordered file-input-md w-full"
                                                onChange={(e) => setPhoto(e.target.files[0])} />
                                        </div>
                                        <div className="flex w-full">
                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <span className="label-text">Category</span>
                                                </label>
                                                <select className="select select-bordered w-full" onChange={(e) => setCategory(e.target.value)}>
                                                    <option disabled selected>Pick your category</option>
                                                    <option>cpu</option>
                                                    <option>motherboard</option>
                                                    <option>ram</option>
                                                    <option>power_supply</option>
                                                    <option>monitor</option>
                                                    <option>mouse</option>
                                                </select>
                                            </div>
                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <span className="label-text">In stock</span>
                                                </label>
                                                <select className="select select-bordered w-full" onChange={(e) => setInStock(e.target.value)}>
                                                    <option disabled selected>status</option>
                                                    <option>yes</option>
                                                    <option>no</option>
                                                </select>
                                            </div>
                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <span className="label-text">Rating</span>
                                                </label>
                                                <input type="text" placeholder="rating" className="input input-bordered w-full"
                                                    onChange={(e) => setRating(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Descriptions</span>
                                            </label>
                                            <textarea placeholder="product descriptions" className="textarea textarea-bordered textarea-md w-full"
                                                onChange={(e) => setDescription(e.target.value)}></textarea>
                                        </div>

                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary text-[20px]" onClick={handleSumit}>Add Product</button>
                                        </div>
                                        <ToastContainer />
                                    </div>
                                }



                                {
                                    activeTab === 'tab2' &&
                                    <div className="p-5 w-full">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Title</span>
                                            </label>
                                            <input type="text" placeholder="title" className="input input-bordered"
                                                onChange={(e) => setCatTitle(e.target.value)} />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Photo</span>
                                            </label>
                                            <input type="file" className="file-input file-input-bordered file-input-md w-full"
                                                onChange={(e) => setCatPhoto(e.target.files[0])} />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Descriptions</span>
                                            </label>
                                            <textarea placeholder="product descriptions" className="textarea textarea-bordered textarea-md w-full"
                                                onChange={(e) => setCatDescription(e.target.value)}></textarea>
                                        </div>

                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary text-[20px]" onClick={handleCatSubmit}>Add Category</button>
                                        </div>
                                        <ToastContainer />
                                    </div>

                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default addproduct