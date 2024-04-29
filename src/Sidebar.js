import React from 'react'
import * as IO5 from "react-icons/io5";
import { list } from './data'
import { useGetContext } from './context';

function Sidebar() {
    const {showSidebar,closeSidebar} = useGetContext();
    return (
        <div className='sidebar' data-open={showSidebar}>
            <div className='sidebar-header d-flex flex-column align-items-center gap-3'>
                <div className='close-btn text-white py-2 d-flex justify-content-center w-100' onClick={closeSidebar} role='button'>
                    <IO5.IoClose size={30} />
                </div>
                <div className='logo d-flex justify-content-center'>
                    <img src="/logo.png" alt="" />
                </div>
            </div>
            <div className='menuItemBox mt-5'>
                <ul className='list-unstyled p-0 m-0 d-flex flex-column gap-3'>
                    {
                        list.map((item) => {
                            return (
                                <li key={item.id} className='menuItem'>
                                    <a href={item.link} className='d-flex align-items-center gap-2 px-3'>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar