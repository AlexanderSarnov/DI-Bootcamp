import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './shop.css';
// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const Shop = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        all();
    }, []);

    const all = async () => {
        try {
            const res = await fetch(`${BASE_URL}/products`);
            const data = await res.json();
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    };

    const add = async (e) => {
        e.preventDefault();

        const name = e.target.prodname.value;
        const price = e.target.prodprice.value;

        // console.log(name, price);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, price }),
        };

        try {
            const res = await fetch(`${BASE_URL}/products`, options);
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error(error);
            alert('Failed to add product');
        }
    };

    return (
        <>
            <h2>My Shop</h2>
            <form onSubmit={add}>
                <h3>Add a product</h3>
                <input type="text" placeholder="Name" name="prodname" />
                <input type="text" placeholder="Price" name="prodprice" />
                <input type="submit" name="Submit" />
            </form>
            {products.map((item) => {
                return (
                    <div key={item.id} className="card">
                        <h2>{item.name}</h2>
                        <h4>{item.price}</h4>
                        <Link to={`/products/${item.id}`}>Buy Now</Link>
                    </div>
                );
            })}
        </>
    );
};
export default Shop;
