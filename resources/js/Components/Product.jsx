import { useState, forwardRef } from 'react';

const Product = forwardRef(({ data }, ref) => {
    const [name, setName] = useState(data.name ?? '');
    const [description, setDescription] = useState(data.description ?? '');
    const [price, setPrice] = useState(data.price ?? '');
    const [stock, setStock] = useState(data.stock ? 'In Stock' : 'Out of Stock');
    const [image, setImage] = useState(data.image ?? '');
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div ref={ref} className="bg-white shadow-lg rounded-lg flex flex-col border border-gray-200 hover:shadow-xl transition-all duration-150 hover:scale-[1.01] h-full">
            <img src={image} alt={name} className="w-full aspect-square object-cover rounded"/>
            <div className="flex flex-col gap-4 p-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                    <p className="text-gray-600">${price}</p>
                    <p className={`text-sm ${stock === 'In Stock' ? 'text-green-500' : 'text-red-500'}`}>{stock}</p>
                </div>

                <div className="flex-grow">
                    <p className="text-gray-600">
                        {isExpanded ? description : `${description.substring(0, 100)}...`}
                        <button onClick={toggleDescription} className="text-blue-500 ml-2">
                            {isExpanded ? 'Read less' : 'Read more'}
                        </button>
                    </p>
                </div>
                <button
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    );
});

export default Product;
