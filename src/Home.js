import React from 'react'
import * as IO5 from "react-icons/io5";
import {useGetContext} from './context'

function Home() {

    const {openSidebar} = useGetContext();

    return (
        <main className="main vh-100 d-flex flex-column justify-content-between p-0 m-0">
            <div className="content py-4">
                <div className='head'>
                    <span className='menu-btn m-4 py-2 px-2' role='button' onClick={openSidebar}>
                        <IO5.IoMenu size={24} />
                    </span>
                </div>
                <div className="container">
                    <h4 className='text-white text-center'>پروژه اسلایدبار!</h4>
                </div>

            </div>

            <div className="footer text-center py-3 text-white">
                <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" target="_blank" className="text-info">حمید کامیاب</a></small>
            </div>
        </main>
    )
}

export default Home