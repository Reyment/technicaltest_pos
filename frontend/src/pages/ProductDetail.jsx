import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { RxCaretRight } from 'react-icons/rx';
import { FiHeart } from 'react-icons/fi';
import FooterComponent from '../components/FooterComponent';
import NavbarComponent from '../components/NavbarComponent';
import { CartContext } from '../Contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cartItems, addToCart } = useContext(CartContext);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };
  

  return (
    <>
      <NavbarComponent />

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
            <img src="/images/product1.png" className='w-full h-full' alt={product.name} />
          </div>
          <div className='my-auto'>
            <h1 className='text-4xl text-[#642C0C] font-semibold '>{product.pd_name}</h1>
            <h1 className='text-4xl text-[#642C0C] my-2 font-semibold '>{product.pd_price}</h1>
            <div className="flex mb-6">
              <span className="text-yellow-400 text-[26px]">&#9733;</span>
              <span className="text-yellow-400 text-[26px]">&#9733;</span>
              <span className="text-yellow-400 text-[26px]">&#9733;</span>
              <span className="text-yellow-400 text-[26px]">&#9733;</span>
              <span className="text-yellow-400 text-[26px]">&#9733;</span>
            </div>
            <p className='w-3/4'>{product.description}</p>


            <div className='flex items-center mt-4'>
              <button className="bg-[#C0772C]  text-white font-bold py-2 px-4  mt-4 mr-4"  onClick={handleAddToCart} >Add to Cart</button>
            </div>
            <div className='items-center'>

            </div>

          </div>
        </div>
      </div>
      <FooterComponent />

    </>

  );
}

export default ProductDetail;