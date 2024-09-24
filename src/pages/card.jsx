import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../components/button';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { ColorRing } from 'react-loader-spinner';

const Card = () => {
  const { theme } = useContext(ThemeContext);
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) 
 
      return( 
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
        </div>)
 
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <section className={`${theme === "light" ? "bg-white text-black" : "bg-black text-red-500"}`}>
        <h1 className="text-center text-4xl">Trending <span className='text-red-600 font-semibold'>Products</span></h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 gap-20 justify-center">
            { (showAll ? productData : productData.slice(0, 3)).map((product) => ( // show either 3 products or all
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg shadow-red-600 border-red-600 border-1">
                <Link to={`/product/${product.id}`} className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={product.title}
                    className="object-cover object-center w-full h-full block"
                    src={product.image}
                  />
                </Link>
                <div className="mt-4">
                  <div>
                    <h3 className="text-xs tracking-widest title-font mb-1">
                      {product.category}
                    </h3>
                    <h2 className="title-font text-lg font-medium">
                      {product.title}
                    </h2>
                    <p className="mt-1">${product.price}</p>
                  </div>
                  <div>
                    <Link to={`/product/${product.id}`}>
                      <CustomButton text="More..." type="dashed" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Toggle "View All" and "View Less" based on showAll state */}
        <div className="text-center">
          <CustomButton 
            text={showAll ? "View Less" : "View All"} 
            type="solid" 
            onClick={() => setShowAll(!showAll)} // toggle between showing all and few
          />
        </div>
      </section>
    </div>
  );
};

export default Card;
