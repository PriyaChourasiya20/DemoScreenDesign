import React from 'react';
import { FaPlus, FaArrowUp, FaArrowDown } from "react-icons/fa";
import './style.css'
import { CiSearch } from "react-icons/ci";
import Graph from '../../images/graph.jpg'

function WelcomeScreen() {
    return (
        <div style={{ paddingLeft: '20px' }}>
            <div style={{}}>
                <CiSearch style={{ position: "absolute", paddingTop: '26px' }} size={15} />
                <input class="input" type="search" placeholder="Search" />
            </div>
            <div style={{ display: 'flex' }}>
                <h1 style={{ marginRight: '8px', color: "#a3a7a5", letterSpacing: "1px", fontFamily: 'Open Sans', }}>Welcome,</h1>
                <h1 style={{ color: "#2a2a2a", letterSpacing: "1px", fontFamily: 'Open Sans', }}>William</h1>
            </div>
            <p style={{ fontSize: '13px', marginTop: '-5px', marginBottom: '25px', fontFamily: 'sans-serif' }}>You have <span class='span'>9 free rooms </span> at Saint Denis </p>
            <div style={{ display: 'flex', }}>
                <div class="wrapper" style={{ backgroundColor: "#fef5e8" }}>
                    <div class="head">
                        <h3 style={{ color: "#e38d23", marginLeft: '40px' }}>4%</h3>
                        <FaArrowUp size={10} style={{ marginLeft: "16px", color: '#e38d23' }} />
                    </div>

                    <div class="cardtitle">
                        <div class="subtext">
                            <h1 class="text">31</h1>
                        </div>
                        <div class="subtext">
                            <h1 class="text">19</h1>
                        </div>
                    </div>

                    <div class="bottomtext">
                        <h2 style={{
                            fontSize
                                : '8px', marginRight: '12px',
                        }}>Booked</h2>
                        <h2 style={{
                            fontSize
                                : '8px'
                        }}>Check in</h2>
                    </div>
                </div>

                <div class="wrapper" style={{ backgroundColor: "#f6edff" }}>
                    <div class="head">
                        <h3 style={{ color: "#8440c6", marginLeft: '40px' }}>6%</h3>
                        <FaArrowDown size={10} style={{ marginLeft: "16px", color: '#8440c6', width: '20%' }} />
                    </div>

                    <div class="cardtitle">
                        <div class="subtext">
                            <h1 class="text">8</h1>
                        </div>
                        <div class="subtext">
                            <h1 class="text">5</h1>
                        </div>
                    </div>
                    <div class="bottomtext">
                        <h2 style={{
                            fontSize
                                : '8px', marginRight: '12px',
                        }}>Booked</h2>
                        <h2 style={{
                            fontSize
                                : '8px'
                        }}>Check in</h2>
                    </div>
                </div>

                <div class="wrapperBox">
                    <FaPlus style={{}} size={12} />
                    <h1 style={{ fontSize: '10px', }}>Add new Object</h1>
                </div>
            </div >

            <div style={{ display: 'flex' }}>
                <h5 style={{ marginLeft: '30px', fontSize: '10px', fontWeight: 400 }}>Saint Denis</h5>
                <h5 style={{ marginLeft: '90px', fontSize: '10px', fontWeight: 400 }}>BlackWater</h5>

            </div>

            <div style={{ marginTop: "5px" }}>
                <img src={Graph} alt="graph" height='220px' width="420px" style={{ border: '1px solid #ecebec', borderRadius: '14px', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} />
            </div>
        </div >
    )
}

export default WelcomeScreen
