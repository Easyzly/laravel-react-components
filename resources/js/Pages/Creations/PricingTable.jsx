import {Head} from "@inertiajs/react";
import NotificationsDropdown from "@/Components/NotificationsDropdown.jsx";
import {useEffect, useState} from "react";
import PricingSection from "@/Components/PricingSection.jsx";

export default function Page() {
    const [priceSelection, setPriceSelection] = useState([]);

    const getPriceSections = () => {
        axios.get(route('pricing-table.data')).then(response => {
            setPriceSelection(response.data);
            console.log(response.data);
        }).catch(error => {
            console.error(error);
        });
    }

    useEffect(() => {
        getPriceSections();
    }, []);

    return (
        <>
            <Head title="Notifications Dropdown" />

            <div className="flex items-center justify-center min-h-screen">
                <div className="flex gap-4">
                    {priceSelection.map((section, index) => (
                        <PricingSection key={index} data={section} />
                    ))}
                </div>
            </div>
        </>
    );
}
