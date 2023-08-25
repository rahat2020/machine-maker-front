import { addToCart } from "@/redux/Cart/cartSlice"
import Link from "next/link"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PcBuildItem = ({ product }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
        toast("Product added to the cart")
    }
    return (
        <div className='h-auto'>
            <div className="bg-white py-24 sm:py-32">
                <div className="shadow-sm my-10 ">
                    <h3 className='text-3xl uppercase text-center font-bold text-slate-900'>
                        {router?.asPath.slice(9, 26)} category products
                    </h3>
                </div>

                <dialog id="my_modal_1" className="modal">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </dialog>

                <ToastContainer />

                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="flex flex-wrap gap-6">

                        {
                            product?.map((item, index) => (
                                // <Link href={`/featurepd/${item?._id}`} key={index}>
                                <div key={index} className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[520px]">
                                    <img className="rounded-t-lg h-[300px] w-[400px]" src={item?.photo} alt="img" />
                                    <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                        <div className="flex justify-between items-center">
                                            <p className=" font-normal text-gray-700 dark:text-gray-400"><strong>Category: </strong>
                                                {item.category}
                                            </p>
                                           
                                            <p className="font-normal text-gray-700 dark:text-gray-400"><strong>Model: </strong>{item.model}</p>
                                        </div>
                                        <div className="flex justify-between items-center">
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
                                         <p className="font-normal text-gray-700 dark:text-gray-400"><strong>Stock: </strong>
                                                {item.inStock}
                                            </p>
                                        <p className=" font-normal text-gray-700 dark:text-gray-400"><strong>Price: </strong>
                                                {item.price}৳
                                            </p>

                                        </div>

                                        <div className="flex justify-center items-center mt-3">
                                            <button className="px-3 py-1 bg-teal-500 text-white rounded-md font-bold"
                                                onClick={() => handleAddToCart(item)}
                                            // onClick={() => dispatch(addToCart(item))}
                                            >
                                                Add To Builder
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                // </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PcBuildItem

export const getStaticPaths = async () => {
    const res = await fetch('https://machine-maker.vercel.app/product/get');
    const pd = await res.json();

    const paths = pd.map((item) => ({
        params: { pcid: item.category }
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://machine-maker.vercel.app/product/filtered?category=${params.pcid}`);
    const data = await res.json();
    // console.log('single_data', data);

    return {
        props: {
            product: data
        },
    };
};
