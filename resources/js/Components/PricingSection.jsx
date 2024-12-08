import { useState } from 'react';

export default function PricingSection({data}) {
    const [title, setTitle] = useState(data.title);
    const [price, setPrice] = useState(data.price);
    const [features, setFeatures] = useState(data.features);
    const [cta, setCta] = useState(data.cta);
    const [billingCycle, setBillingCycle] = useState(data.billingCycle);
    const [discount, setDiscount] = useState(data.discount);

return (
<div className="bg-white shadow-lg rounded-lg w-72 p-6 flex flex-col gap-4 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                <p className="text-gray-600">{price} <span className="text-sm text-gray-500">/ {billingCycle}</span></p>
            </div>
            <ul className="space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                        <span className="ml-2 text-gray-600">{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="flex-grow"></div>
            <p className="text-sm text-gray-600">{discount}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">{cta}</button>
        </div>
    );
}
