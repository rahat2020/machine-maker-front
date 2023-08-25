import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const featureupdate = ({ product }) => {
    console.log('product', product)

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [photo, setPhoto] = useState('')
    const [inStock, setInStock] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    const [model, setModel] = useState('')
    const [brand, setBrand] = useState('')
    const [resulations, setResulations] = useState('')
    const [price, setPrice] = useState('')

    const handleSumit = async (e) => {
        e.preventDefault();

        if(photo === ''){
            const object = {
                title:title || product.title || '',
                category:category || product.category || '',
                inStock:inStock || product.inStock || '',
                description: description || product.description || '',
                rating: rating || product.rating || '',
                model: model || product.model || '',
                brand: brand || product.brand || '',
                resulations: resulations || product.resulations || '',
                photo: product.photo
            }
            console.log(object)
            try {
                const res = await axios.put(`http://localhost:5000/product/update/${product._id}`, object)
                console.log('res', res)
                toast("Product is updated")
                setTimeout(() => {
                    window.location.reload()
                }, 2000)
    
            } catch (err) {
                console.log(err)
            }
        } else if(photo ){
            const data = new FormData();
            data.append("file", photo);
            data.append("upload_preset", "upload");
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/rahatdev1020/image/upload", data)
            const { url } = uploadRes.data
            const object = {
                title:title || product.title || '',
                category:category || product.category || '',
                inStock:inStock || product.inStock || '',
                description: description || product.description || '',
                rating: rating || product.rating || '',
                model: model || product.model || '',
                brand: brand || product.brand || '',
                resulations: resulations || product.resulations || '',
                price: price || product.price || '',
                photo: url 
            }
    
            console.log(object)
            try {
                const res = await axios.put(`http://localhost:5000/product/update/${product._id}`, object)
                console.log('res', res)
                toast("Product is updated")
                setTimeout(() => {
                    window.location.reload()
                }, 2000)
    
            } catch (err) {
                console.log(err)
            }
        }
      
    }

    return (
        <div className="p-10 min-h-screen bg-base-200">
            <div className=" flex-col lg:flex-row-reverse justify-center shadow-2xl">
                <div className="rounded flex justify-center w-full shadow-2xl bg-base-100">
                    <div className="p-5 w-1/2">
                        <h1 className="text-3xl font-bold py-2 text-center border-b-2 border-collapse border-slate-400 text-white">Update product</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="title" className="input input-bordered"
                                onChange={(e) => setTitle(e.target.value)} defaultValue={product.title}/>
                        </div>

                        <div className="flex w-full">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Model</span>
                                </label>
                                <input type="text" className="input input-bordered w-full" onChange={(e) => setModel(e.target.value)} defaultValue={product.model}/>
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Brand</span>
                                </label>
                                <input type="text" className="input input-bordered w-full" onChange={(e) => setBrand(e.target.value)} defaultValue={product.brand}/>
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Resulations</span>
                                </label>
                                <input type="text" className="input input-bordered w-full" onChange={(e) => setResulations(e.target.value)} defaultValue={product.resulations}/>
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" className="input input-bordered w-full" onChange={(e) => setPrice(e.target.value)} defaultValue={product.price}/>
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
                                    <option disabled selected>{product.category}</option>
                                    <option>cpu</option>
                                    <option>motherboard</option>
                                    <option>ram</option>
                                    <option>power supply unit</option>
                                    <option>storage device</option>
                                    <option>monitor</option>
                                    <option>gpu</option>
                                    <option>mouse</option>
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">In stock</span>
                                </label>
                                <select className="select select-bordered w-full" onChange={(e) => setInStock(e.target.value)}>
                                    <option disabled selected>{product.inStock}</option>
                                    <option>yes</option>
                                    <option>no</option>
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" placeholder="rating" className="input input-bordered w-full"
                                    onChange={(e) => setRating(e.target.value)} defaultValue={product.rating}/>
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Descriptions</span>
                            </label>
                            <textarea placeholder="product descriptions" className="textarea textarea-bordered textarea-md w-full"
                                onChange={(e) => setDescription(e.target.value)} defaultValue={product.description}></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-[20px]" onClick={handleSumit}>Update Product</button>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default featureupdate



export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/product/get');
    const pd = await res.json();

    const paths = pd.map((item) => ({
        params: { updateId: item._id }
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/product/get/${params?.updateId}`);
    const data = await res.json();
    console.log('single_data', data);

    return {
        props: {
            product: data
        },
    };
};
