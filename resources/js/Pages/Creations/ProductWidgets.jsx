import { Head } from "@inertiajs/react";
import { useEffect, useState, useRef, useCallback } from "react";
import Product from "@/Components/Product.jsx";
import axios from "axios";

export default function Page() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();

    const getProducts = useCallback(() => {
        axios.get(route('product-widgets.data', { page })).then(response => {
            setProducts(prevProducts => [...prevProducts, ...response.data.data]);
            setHasMore(response.data.data.length > 0);
        }).catch(error => {
            console.error(error);
        });
    }, [page]);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    const lastProductElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [hasMore]);

    return (
        <>
            <Head title="Product Widgets" />

            <div className="grid grid-cols-3 max-w-5xl w-full mx-auto gap-6 p-6">
                {products.map((product, index) => {
                    if (products.length === index + 1) {
                        return <Product ref={lastProductElementRef} key={index} data={product} />;
                    } else {
                        return <Product key={index} data={product} />;
                    }
                })}
            </div>
        </>
    );
}
