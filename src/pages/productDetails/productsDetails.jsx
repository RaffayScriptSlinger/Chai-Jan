import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { ThemeContext } from '../../contexts/ThemeContext';
import { CartContext } from '../../contexts/AddToCartContext';
import { ColorRing } from 'react-loader-spinner';
import Swal from 'sweetalert2';

const ProductDetail = () => {
  const { theme } = useContext(ThemeContext);
  const { addToCart } = useContext(CartContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res.meals[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch product", err);
        setLoading(false);
      });
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      const productToAdd = {
        id: product.idMeal,
        name: product.strMeal,
        price: 10,
        image: product.strMealThumb, 
        area: product.strArea, 
      };

      addToCart(productToAdd); 
      Swal.fire(`${product.strMeal} has been added to your cart!`
       )
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    );
  }

  if (!product) {
    return <div><h1>Product not found</h1></div>;
  }

  return (
    <div className={`${theme === "light" ? "bg-white text-black" : "bg-black text-red-500"}`}>
      <section className="body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap shadow-lg shadow-red-600 border-red-600">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product.strMealThumb}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font tracking-widest">{product.strMeal}</h2>
              <h1 className="text-green-600 text-3xl title-font font-medium mb-1">{product.strCategory}</h1>
              <p className="leading-relaxed">{product.strInstructions}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex justify-evenly">
                <span className="title-font font-medium text-2xl text-red-600">{product.strArea}</span>
                <button 
                  className=' border px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md'
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
