import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import RxCaretRight from 'react-icons/rx';

const ProductDetail = ({ products }) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setIsFavorite(data.isFavorite);
      });
  }, [id]);



  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };


  const handleToggleFavorite = () => {
    console.log('Toggle favorit produk:', product);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className='flex gap-3 bg-[#642C0C] px-20'>
        <p className='flex items-center ml-2'>
          <p className='text-[#CCC4B4]  pt-6 pb-6  '>Home</p>
          <RxCaretRight className='ml-1 text-[#CCC4B4]' size={20} />
        </p>

        <div className='flex items-center'>
          <p className='text-[#CCC4B4]  pt-6 pb-6  '>Product</p>
          <RxCaretRight className='ml-1 text-[#CCC4B4]' size={20} />
        </div>
        <div className='flex items-center'>
          <p className='text-[#FFFFFF]  pt-6 pb-6  '>{product.name}</p>
          <RxCaretRight className='ml-1 text-[#FFFFFF]' size={20} />
        </div>
      </div>

      <div className='min-h-screen px-20'>
        <div className='grid grid-cols-2 py-12 gap-16'>
          <div className='w-full '>
            <img src={product.image} className='w-full h-full' alt={product.name} />
          </div>
          <div className='my-auto'>
            <h1 className='text-4xl text-[#642C0C] font-semibold '>{product.name}</h1>
            <h1 className='text-4xl text-[#642C0C] my-2 font-semibold '>{product.price}</h1>
            <div className="flex mb-6">
              <span className="text-yellow-400 text-[26px]">&#9733;</span>
              <span className="text-yellow-400 text-[26px]">&#9733;</span>
              <span className="text-yellow-400 text-[26px]">&#9733;</span>
              <span className="text-yellow-400 text-[26px]">&#9733;</span>
              <span className="text-yellow-400 text-[26px]">&#9733;</span>
            </div>
            <p className='w-3/4'>{product.description}</p>
            <div className="flex w-32  px-2 py-1 gap-3 mt-4 items-center ">
              <button className='border-2 border-[#642C0C] px-4 text-xl py-1' onClick={handleDecreaseQuantity}>-</button>
              <span className="mx-2 text-2xl text-[#642C0C] font-bold">{quantity}</span>
              <button className='border-2 border-[#642C0C] px-3 text-xl py-1' onClick={handleIncreaseQuantity}>+</button>
            </div>

            <div className='flex items-center mt-4'>
              <button className="bg-[#C0772C]  text-white font-bold py-2 px-4  mt-4 mr-4" onClick={handleAddToCart}>Add to Cart</button>
              <button className="mt-2" onClick={handleToggleFavorite}>
                <FiHeart size={42} className='text-[#C0772C]  my-auto h-full' />
              </button>


            </div>
            <div className='items-center'>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
