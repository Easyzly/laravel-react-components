import {Head} from "@inertiajs/react";
import NotificationsDropdown from "@/Components/NotificationsDropdown.jsx";

export default function Page() {
    return (
        <>
            <Head title="Notifications Dropdown" />

            <div className="flex items-center justify-center pb-40 min-h-screen">
                <NotificationsDropdown />
            </div>
        </>
    );
}
