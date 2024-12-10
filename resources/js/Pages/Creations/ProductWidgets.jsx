import {Head} from "@inertiajs/react";
import {useEffect, useState} from "react";
import Product from "@/Components/Product.jsx";

export default function Page() {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios.get(route('product-widgets.data')).then(response => {
            setProducts([...products, ...response.data.data]);
        }).catch(error => {
            console.error(error);
        });
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <Head title="Product Widgets" />

            <div className="grid grid-cols-3 max-w-5xl w-full mx-auto gap-6 p-6">
                {products.map((product, index) => (
                    <Product key={index} data={product} />
                ))}
            </div>
        </>
    );
}
