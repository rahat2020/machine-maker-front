
import Link from 'next/link'

const FeatureHomeProduct = ({ data }) => {

    return (
        <div className='mt-3 bg-white'>
            <div className="shadow-sm">
                <h3 className='text-2xl text-center font-bold text-slate-900'>Featured Products</h3>
            </div>
            <div className="flex columns-3 p-14 items-center gap-10 sm:columns-1 flex-wrap">
                {
                    data.map((item, index) => (
                        <Link href={`/featurepd/${item?._id}`} key={index}>
                            <div className=" w-80 bg-white border h-[300px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="rounded-t-lg object-cover h-40 w-full" src={item?.photo} alt={item.title} />

                                <div className="p-2 text-center">
                                    <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                    <div className="flex w-full justify-between">
                                        <span className='text-white'><strong>Category: </strong> {item.category}</span>
                                        <span className='text-white'><strong>Rating: </strong> {item.rating}</span>
                                        <span className='text-white'><strong>In Stock:</strong> {item.inStock}</span>
                                        <span className='text-white'><strong>Price:</strong> {item.price}৳</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default FeatureHomeProduct

