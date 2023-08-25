

const SingleProduct = ({ product }) => {
  console.log(product);


  return (
    <div className='bg-slate-100'>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={product.photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div className=''>
            <h1 className="text-5xl font-bold">{product?.title}</h1>
            <p className="text-1xl ">{product?.description}</p>
            <p className="text-1xl "><strong>Model: </strong> {product?.model}</p>
            <p className="text-1xl "><strong>Resulations: </strong> {product?.resulations}</p>
            <p className="text-1xl "><strong>Brand: </strong> {product?.brand}</p>
            <p className="py-1"><strong>Category: </strong> {product.category}</p>
            <p className="py-1"><strong>Stock: </strong> {product.inStock}</p>
            <p className="py-1"><strong>Price: </strong> {product.price === null ? 'N/A' : product.price}৳</p>
            {
              product.rating === "4" &&
              <p className="py-1"><strong>Rating: </strong> {product.rating === "4" ? "⭐⭐⭐⭐" : "⭐"}</p>
            }
            {
              product.rating === "5" &&
              <p className="py-1"><strong>Rating: </strong> {product.rating === "5" ? "⭐⭐⭐⭐⭐" : "⭐"}</p>
            }
            {
              product.rating === "3" &&
              <p className="py-1"><strong>Rating: </strong> {product.rating === "3" ? "⭐⭐⭐" : "⭐"}</p>
            }
            {
              product.rating === "2" &&
              <p className="py-1"><strong>Rating: </strong> {product.rating === "2" ? "⭐⭐" : "⭐"}</p>
            }
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

export const getStaticPaths = async () => {
  const res = await fetch('https://machine-maker.vercel.app/product/get');
  const pd = await res.json();

  const paths = pd.map((item) => ({
    params: { pd: item._id }
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`https://machine-maker.vercel.app/product/get/${params?.pd}`);
  const data = await res.json();
  console.log('single_data', data);

  return {
    props: {
      product: data
    },
  };
};
