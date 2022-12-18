import React from 'react';
import { FaRegBell } from "react-icons/fa";
import { CiLock, CiSettings } from "react-icons/ci";
import img1 from "../../images/img.jpg"
import img2 from "../../images/img2.png"
import img3 from "../../images/img3.png"
import img4 from "../../images/img4.png"
import Avatar from '../../images/profil.png'
import './style.css'

function Bookinglist() {
    const Data = [
        {
            name: "Wade Warren",
            date: "01.12-01.14",
            title: "#SGL",
            number: " 0 guests",
            status: "Paid",
            color: 'green',
            img: img2,
            style: {
                color: "#8a3bd6",
                backgroundColor: '#f6ebff',
                borderColor: "#f6ebff"
            },
        },
        {
            name: "Jacob Jones",
            date: "01.12-01.13",
            title: "#QDPL",
            number: "3 guests",
            status: "Pending",
            color: 'grey',
            img: img3,
            style: {
                color: "#e4922e",
                backgroundColor: '#fef5e8',
                borderColor: "#fef5e8"
            },
        },
        {
            name: "Kathryn Murphy",
            date: "01.12-01.15",
            title: "#DBL",
            number: "0 guest",
            status: 'Paid',
            img: img4,
            style: {
                color: "#8a3bd6",
                backgroundColor: '#f6ebff',
                borderColor: "#f6ebff",
            },
        }
    ]

    return (
        <div style={{ marginTop: '10px' }}>
            <div class="booking">
                <div class="iconWrapper" >
                    <FaRegBell style={{ marginLeft: '7px' }} />
                    <div class="divWrap"></div>
                </div>
                <h1 style={{ fontSize: '10px', marginLeft: '85px', marginTop: "15px", marginRight: '20px', fontFamily: "sans-serif" }}>William Dawson</h1>
                <img src={Avatar} alt='avatar' width="40px" height='40px' />
            </div>

            <div class="sidewrapper">
                <img src={img1} alt="img" height="150px" width='200px' style={{ borderRadius: '10px', marginTop: '7px' }} />
                <div style={{ display: 'flex' }}>
                    <p style={{ fontSize: '10px', fontWeight: "bold" }}>Booking List</p>
                    <p style={{ marginLeft: '120px', fontSize: '10px' }}>....</p>
                </div>
                {Data.map((item) =>
                    <div style={{ display: 'flex', borderBottom: (item.name == "Wade Warren" || item.name == "Jacob Jones") ? '1px solid #ecedec' : null, }}>
                        <img src={item.img} alt='avatat' width='30px' height='30px' style={{ marginTop: '12px' }} />
                        <div style={{ padding: '4px', paddingLeft: '10px' }}>
                            <p style={{ marginTop: '6px', fontSize: '10px' }}>{item.name}</p>
                            <p style={{ fontSize: '10px', color: '#afb9c9' }}>{item.title} <span style={{ color: '#afb9c9', marginBottom: '5px' }}>.</span>{item.number}</p>
                        </div>
                        <div style={{ marginTop: '-1px', marginLeft: '7px' }}>
                            <p style={{ marginLeft: '10px', fontSize: '10px', color: '#a2adbf' }}>{item.date}</p>
                            <div class="list" style={item.style}>
                                <p class="para" style={item.style}> {item.status}</p>
                            </div>
                        </div>
                    </div>
                )}
                <p class="viewall">View all</p>
            </div>
            <div class="newfeature">
                <p style={{ position: 'relative', zIndex: 20 }}>UNLOCK NEW FEATURES</p>
                <div class="footer">
                    <CiLock style={{
                        width: '10px', height: '10px',
                        position: 'absolute',
                        marginBottom: '30px',
                        right: '150px',
                        padding: '5px'
                    }} className='circle' />
                    <p style={{ color: 'white', fontSize: '10px', }}> Get Pro Now</p>
                </div>
            </div>
        </div >
    )
}

export default Bookinglist
