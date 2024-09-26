import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ColorRing } from 'react-loader-spinner';

const ProductDetail = () => {
  const { theme } = useContext(ThemeContext);
  const { productId } = useParams(); // productId now refers to the meal ID
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res); // Log the response to see the data structure
        setProduct(res.meals[0]); // Access the meal object inside the response
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch product", err);
        setLoading(false);
      });
  }, [productId]);

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
              src={product.strMealThumb} // Meal image from TheMealDB
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font tracking-widest">{product.strMeal}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.strCategory}</h1>
              <p className="leading-relaxed">{product.strInstructions}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">{product.strArea}</span>
                <button className='ml-5 border'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
