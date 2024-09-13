import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define an async function inside useEffect
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

        // Call the async function
        fetchProducts();
    }, []); // Empty dependency array means this runs once on mount

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <section className="text-gray-600 body-font">
                <h1 className="text-center text-4xl">Our Products</h1>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 gap-20 justify-center">
                        {productData.map((product) => (
                            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full border-pink-400 border-2">
                                <Link to={`/product/${product.id}`} className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt={product.title}
                                        className="object-cover object-center w-full h-full block"
                                        src={product.image}
                                    />
                                </Link>
                                <div className="mt-4">
                                    <div>
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                            {product.category}
                                        </h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">
                                            {product.title}
                                        </h2>
                                        <p className="mt-1">${product.price}</p>
                                    </div>
                                    <div>
                                        <Link to={`/product/${product.id}`}>
                                            <button className="bg-yellow-400 p-2 rounded-md">
                                                Add Cart
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Card;
