import React from 'react';
import { FaGripfire } from "react-icons/fa";
import img1 from "../../images/img.jpg"
import Avatar from '../../images/avatar.png'
import './style.css'
import { Backdrop } from '@material-ui/core';

function Bookinglist() {
    const Data = [
        {
            name: "Wade Warren",
            date: "01.12-01.14",
            title: "#SGL",
            number: " 0 guests",
            status: "Paid",
            color: 'green',
        },
        {
            name: "Jacob Jones",
            date: "01.12-01.13",
            title: "#QDPL",
            number: "3 guests",
            status: "Pending",
            color: 'grey',

        },
        {
            name: "Kathryn Murphy",
            date: "01.12-01.15",
            title: "#DBL",
            number: "0 guest",
            status: 'Paid'

        }
    ]

    return (
        <div style={{ marginTop: '10px' }}>
            <div class="booking">
                <FaGripfire style={{ marginTop: "15px" }} />
                <h1 style={{ fontSize: '10px', marginLeft: '90px', marginTop: "15px" }}>William Dawson</h1>
                <img src={Avatar} alt='avatar' width="40px" height='40px' />
            </div>

            <div class="sidewrapper">
                <img src={img1} alt="img" height="150px" width='200px' />
                <div style={{ display: 'flex' }}>
                    <p style={{ fontSize: '10px', marginLeft: '5px' }}>Booking List</p>
                    <p style={{ marginLeft: '85px', fontSize: '10px' }}>....</p>
                </div>
                {Data.map((item) =>
                    <div style={{ display: 'flex', borderBottom: '1px solid grey' }}>
                        <img src={Avatar} alt='avatat' width='30px' height='50px' />
                        <div style={{ padding: '4px' }}>
                            <p style={{ marginTop: '6px', fontSize: '10px' }}>{item.name}</p>
                            <p style={{ fontSize: '10px', color: 'grey' }}>{item.title}.{item.number}</p>
                        </div>
                        <div style={{ marginTop: '-6px', marginLeft: '7px' }}>
                            <p style={{ marginLeft: '10px', fontSize: '10px' }}>{item.date}</p>
                            <div class="list">
                                <p class="para"> {item.status}</p>
                            </div>
                        </div>
                    </div>
                )}
                <p class="viewall">View all</p>
            </div>
            <div class="newfeature">
                <p>UNLOCK NEW FEATURES</p>
                <div class="footer">
                    <p style={{ marginTop: '10px', color: 'white', fontSize: '10px' }}> Get Pro Now</p>
                </div>
            </div>
        </div >
    )
}

export default Bookinglist
