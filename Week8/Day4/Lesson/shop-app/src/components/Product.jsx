import { useStatem, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Product = (props) => {
    const [product, setProduct] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetchProduct(params.productId);
    }, [params.productId]);

    const info = async () => {
        try {
            const res = await fetch(`${BASE_URL}/products/${params.id}`);
            const data = await res.json();
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h2>Product #: {params.id}</h2>
            {product.map((item) => {
                return (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <h1>{item.price}</h1>
                        <p>{item.description}</p>
                        <Link to>Continue Shopping</Link>
                    </div>
                );
            })}
        </>
    );
};
export default Product;
