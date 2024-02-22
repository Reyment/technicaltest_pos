import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCaretRight } from 'react-icons/rx';
import axios from 'axios';



// export const products = [
//   {
//     id: 1,
//     name: 'Modern Minimalist Sofa',
//     headline: 'Elegan, Minimalis, Modern',
//     description: 'This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.',
//     price: 'Rp. 12.000.000,00',
//     qty: '1',
//     subtotal: 'Rp. 12.000.000,00',
//     image: '/images/product1.png'
//   },
//   {
//     id: 2,
//     name: 'Modern Minimalist Sofa',
//     headline: 'Elegan, Minimalis, Modern',
//     description: 'This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.',
//     price: 'Rp. 12.000.000,00',
//     qty: '1',
//     subtotal: 'Rp. 12.000.000,00',
//     image: '/images/product1.png'
//   },
//   {
//     id: 3,
//     name: 'Modern Minimalist Sofa',
//     headline: 'Elegan, Minimalis, Modern',
//     description: 'This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.',
//     price: 'Rp. 12.000.000,00',
//     qty: '1',
//     subtotal: 'Rp. 12.000.000,00',
//     image: '/images/product1.png'
//   },
//   {
//     id: 4,
//     name: 'Modern Minimalist Sofa',
//     headline: 'Elegan, Minimalis, Modern',
//     description: 'This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.',
//     price: 'Rp. 12.000.000,00',
//     qty: '1',
//     subtotal: 'Rp. 12.000.000,00',
//     image: '/images/product1.png'
//   },
//   {
//     id: 5,
//     name: 'Modern Minimalist Sofa',
//     headline: 'Elegan, Minimalis, Modern',
//     description: 'This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.',
//     price: 'Rp. 12.000.000,00',
//     qty: '1',
//     subtotal: 'Rp. 12.000.000,00',
//     image: '/images/product1.png'
//   },
//   {
//     id: 6,
//     name: 'Modern Minimalist Sofa',
//     headline: 'Elegan, Minimalis, Modern',
//     description: 'This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.',
//     price: 'Rp. 12.000.000,00',
//     qty: '1',
//     subtotal: 'Rp. 12.000.000,00',
//     image: '/images/product1.png'
//   },
//   {
//     id: 7,
//     name: 'Modern Minimalist Sofa',
//     headline: 'Elegan, Minimalis, Modern',
//     description: 'This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.',
//     price: 'Rp. 12.000.000,00',
//     qty: '1',
//     subtotal: 'Rp. 12.000.000,00',
//     image: '/images/product1.png'
//   },
//   {
//     id: 8,
//     name: 'Modern Minimalist Sofa',
//     headline: 'Elegan, Minimalis, Modern',
//     description: 'This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.',
//     price: 'Rp. 12.000.000,00',
//     qty: '1',
//     subtotal: 'Rp. 12.000.000,00',
//     image: '/images/product1.png'
//   },
//   {
//     id: 9,
//     name: 'Modern Minimalist Sofa',
//     headline: 'Elegan, Minimalis, Modern',
//     description: 'This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.',
//     price: 'Rp. 12.000.000,00',
//     qty: '1',
//     subtotal: 'Rp. 12.000.000,00',
//     image: '/images/product1.png'
//   },
//   {
//     id: 10,
//     name: 'Modern Minimalist Sofa',
//     headline: 'Elegan, Minimalis, Modern',
//     description: 'This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.',
//     price: 'Rp. 12.000.000,00',
//     qty: '1',
//     subtotal: 'Rp. 12.000.000,00',
//     image: '/images/product1.png'
//   },
//   {
//     id: 11,
//     name: 'Modern Minimalist Sofa',
//     headline: 'Elegan, Minimalis, Modern',
//     description: 'This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.',
//     price: 'Rp. 12.000.000,00',
//     qty: '1',
//     subtotal: 'Rp. 12.000.000,00',
//     image: '/images/product1.png'
//   },
//   {
//     id: 12,
//     name: 'Modern Minimalist Sofa',
//     headline: 'Elegan, Minimalis, Modern',
//     description: 'This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.',
//     price: 'Rp. 12.000.000,00',
//     qty: '1',
//     subtotal: 'Rp. 12.000.000,00',
//     image: '/images/product1.png'
//   },
//   {
//     id: 13,
//     name: 'Modern Minimalist Sofa',
//     headline: 'Elegan, Minimalis, Modern',
//     description: 'This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.',
//     price: 'Rp. 12.000.000,00',
//     qty: '1',
//     subtotal: 'Rp. 12.000.000,00',
//     image: '/images/product1.png'
//   },
//   {
//     id: 14,
//     name: 'Modern Minimalist Sofa',
//     headline: 'Elegan, Minimalis, Modern',
//     description: 'This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.',
//     price: 'Rp. 12.000.000,00',
//     qty: '1',
//     subtotal: 'Rp. 12.000.000,00',
//     image: '/images/product1.png'
//   },
//   {
//     id: 15,
//     name: 'Modern Minimalist Sofa',
//     headline: 'Elegan, Minimalis, Modern',
//     description: 'This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.',
//     price: 'Rp. 12.000.000,00',
//     qty: '1',
//     subtotal: 'Rp. 12.000.000,00',
//     image: '/images/product1.png'
//   },
//   {
//     id: 8,
//     name: 'Modern Minimalist Sofa',
//     headline: 'Elegan, Minimalis, Modern',
//     description: 'This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.',
//     price: 'Rp. 12.000.000,00',
//     qty: '1',
//     subtotal: 'Rp. 12.000.000,00',
//     image: '/images/product1.png'
//   },
// ];

const Product = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const listProductRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (listProductRef.current) {
      listProductRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {/* hero product */}
      <section className='pb-8' id='Hero-Product'>
        <div className="  absolute z-30 px-20 pt-32">
          <h1 className='text-[#FFFFFF] text-6xl font-normal'>Product</h1>
          <div className='flex gap-3'>
            <div className='flex items-center'>
              <p className='text-[#CCC4B4]  pt-6 pb-6  '>Home</p>
              <RxCaretRight className='ml-1 text-[#CCC4B4]' size={20} />
            </div>

            <div className='flex items-center'>
              <p className='text-[#FFFFFF]  pt-6 pb-6  '>Product</p>
              <RxCaretRight className='ml-1 text-[#FFFFFF]' size={20} />
            </div>
          </div>

        </div>
        <div className='w-full relative'>
          <img
            src="/images/herocta.png"
            alt=""
            className='w-full  object-cover'
          />
          <img
            src="/effects/producteffect.png"
            alt=""
            className='w-full h-full  object-cover absolute top-0 left-0 z-20'
          />
        </div>
      </section>

      {/* product list */}
      <section id='listProduct'>
        <div className=' p-16 px-20 '>
          <div className='grid grid-cols-3 gap-12 py-8'>
            {currentProducts.map((product) => (
              <div key={product.pd_id} className='shadow-xl rounded-lg bg-[#FFFFFF]'>
                <Link to={`/product/${product.pd_id}`}>
                  <img src={product.pd_image} className='w-full h-72' alt="" />
                </Link>
                <div className='px-4 py-5'>
                  <Link to={`/product/${product.pd_id}`}>
                    <h4 className='text-[#642C0C] font-bold text-2xl pt-1-1'>{product.pd_name}</h4>
                  </Link>
                  <p className='text-sm text-[#979390] py-1'>{product.pd_headline}</p>
                  <h4 className='text-[#642C0C] font-semibold text-1xl'>{product.pd_price}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <div className="flex justify-center items-center mb-12">
        {currentPage !== 1 && (
          <button onClick={prevPage} className="bg-[#E5D097] text-white hover:bg-[#C0772C] px-4 py-2 mx-1 rounded-l cursor-pointer">
            Previous
          </button>
        )}
        <ul className="flex justify-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i} className={`${currentPage === i + 1 ? 'bg-[#C0772C] text-white' : 'bg-[#E5D097] text-white'} cursor-pointer px-4 py-2 mx-1`} onClick={() => paginate(i + 1)}>
              {i + 1}
            </li>
          ))}
        </ul>
        {currentPage !== totalPages && (
          <button onClick={nextPage} className="bg-[#E5D097] text-white hover:bg-[#C0772C] px-4 py-2 mx-1 rounded-r cursor-pointer">
            Next
          </button>
        )}
      </div>
    </>
  )
}

export default Product
