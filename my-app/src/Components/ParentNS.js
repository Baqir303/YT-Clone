import React,{useState} from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

export default function ParentNS() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div>
            <Navbar handleMenuClick={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} />
        </div>
    )
}
