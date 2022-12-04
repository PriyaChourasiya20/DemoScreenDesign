import React from 'react'
import '../../App.css';
import './style.css';
import { FaRegHeart, FaCanadianMapleLeaf, FaInnosoft, FaRegCalendar, FaKey, FaAlgolia, FaNapster, FaYoast } from "react-icons/fa";

const Sidebar = () => {
    const Data = [
        {
            title: "Overview",
            Icon: <FaInnosoft />
        },
        {
            title: "Calender",
            Icon: <FaRegCalendar />
        },
        {
            title: "Booking",
            Icon: <FaKey />
        },
        {
            title: "Earnings",
            Icon: <FaAlgolia />
        },
        {
            title: "Suff",
            Icon: <FaNapster />
        },
    ]
    return (
        <div class="sidebar">
            <div class="headwrapper">
                <FaCanadianMapleLeaf style={{ marginTop: '13px' }} />
                <h1 class="textwrap">HOTEL<span style={{ color: "grey", marginLeft: '5px' }}>SWAN</span></h1>
            </div>

            <div class='sidelist'>
                {Data.map((res) => {
                    return (
                        <div class="listwrap">
                            <div class="icon">{res.Icon}</div>
                            <h1 class="title">{res.title}</h1>
                        </div>
                    )
                })
                }
            </div>
            <div class="divwrap">
                <div class="iconwrap">
                    <FaYoast />
                </div>
                <div class="footerwrap">
                    <div style={{ marginTop: '2px' }}>
                        <FaRegHeart />
                    </div>
                    <h1 class="setting">Settings</h1>
                </div>
            </div>
        </div >
    )
}

export default Sidebar
