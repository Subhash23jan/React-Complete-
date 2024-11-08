import React, { useEffect, useState } from 'react'
import './ProductList.css'
function ProductList() {
    const url = 'https://dummyjson.com/products?limit=100';
    const [products, setProducts] = useState([])
    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
           // console.log(data.products);
            setProducts(data.products);
        }
        fetchData();
    }, []);
    console.log(products.length);
        return (
            <div>
                <h1>ProductList</h1>
                <ul className='productList'>
                    {products.map((product) => (
                        <li key={product.id} className='product' >
                            <img src={product.thumbnail} alt={product.title} />
                            <h3>{product.title}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        )
}

export default ProductList