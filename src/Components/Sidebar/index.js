import React from 'react'
import '../../App.css';
import './style.css';
import { CiSettings, CiChat1 } from "react-icons/ci";
import { FaCanadianMapleLeaf, FaInnosoft, FaRegCalendar, FaKey, FaAlgolia, FaNapster, FaYoast } from "react-icons/fa";

const Sidebar = () => {
    const Data = [
        {
            title: "Overview",
            Icon: <FaInnosoft />,
            style: {
                backgroundColor: '#f9f9f9',
                borderRadius: "8px",
            },
            iconstyle: {
                color: "#7088ef"
            },
            titlestyle: {
                color: "#7088ef"
            }
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
                <FaCanadianMapleLeaf style={{ marginTop: '16px' }} />
                <h1 class="textwrap">HOTEL<span style={{ color: "grey", marginLeft: '5px' }}>SWAN</span></h1>
            </div>

            <div class='sidelist'>
                {Data.map((res) => {
                    return (
                        <div class="listwrap" style={res.style}>
                            <div class="icon" style={res.iconstyle} >{res.Icon}</div>
                            <h1 class="title" style={res.titlestyle} >{res.title} </h1>
                        </div>
                    )
                })
                }
            </div>
            <div class="divwrap">
                <div class="iconwrap">
                    <CiChat1 />
                </div>
                <div class="footerwrap">
                    <div style={{ marginTop: '2px' }}>
                        <CiSettings />
                    </div>
                    <h1 class="setting">Settings</h1>
                </div>
            </div>
        </div >
    )
}

export default Sidebar
