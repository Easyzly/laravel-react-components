import { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import { BsFillBellFill } from "react-icons/bs";
import axios from 'axios';

export default function NotificationsDropdown() {
    const [notifications, setNotifications] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);
    const bellRef = useRef(null);

    const fetchNotifications = async () => {
        try {
            const response = await axios.get(route('notifications-dropdown.data'));
            setNotifications(response.data);
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    const handleBellClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setShowNotifications(!showNotifications);
        if (!showNotifications) {
            fetchNotifications();
        }
    };

    const handleClickOutside = (event) => {
        if (bellRef.current && !bellRef.current.contains(event.target)) {
            setShowNotifications(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={bellRef}>
            <Link onClick={handleBellClick} className="rounded-full duration-400 hover:scale-105">
        <BsFillBellFill className={"w-6 h-6 duration-150 " + (showNotifications ? "text-blue-600" : "text-stone-700")} />
            </Link>
            {showNotifications && (
                <div className="absolute right-0 mt-2 w-96 max-h-96 overflow-y-scroll bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4">
                    {notifications.length > 0 ? (
                        notifications.map((notification, index) => (
                            <li key={index + '-notification'} className={"flex flex-col gap-2 " + (index !== notifications.length - 1 ? "border-b pb-2" : "")}>
                                <h4 className="font-semibold">{notification.title}</h4>
                                <p className="text-sm opacity-75">{notification.content}</p>
                                <p className="text-sm text-blue-600">{notification.created_at}</p>
                            </li>
                        ))
                    ) : (
                        <li>No notifications</li>
                    )}
                </div>
            )}
        </div>
    );
}
