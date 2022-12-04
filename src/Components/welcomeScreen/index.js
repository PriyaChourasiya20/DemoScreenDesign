import React from 'react';
import { FaSearch, FaPlus, FaArrowUp } from "react-icons/fa";
import './style.css'
import Graph from '../../images/graph.jpg'

function WelcomeScreen() {
    return (
        <div style={{ paddingLeft: '20px' }}>
            <div style={{}}>
                <FaSearch style={{ position: "absolute", padding: '20px', }} />
                <input class="input" type="search" placeholder="Search" />
            </div>
            <div style={{ display: 'flex' }}>
                <h1 style={{ marginRight: '8px', color: "#a3a7a5" }}>Welcome,</h1>
                <h1 style={{ color: "#2a2a2a" }}>William</h1>
            </div>
            <p style={{ fontSize: '13px', marginTop: '0px' }}>You have <span class='span'>9 free rooms </span> at Saint Denis </p>
            <div style={{ display: 'flex', }}>
                <div class="wrapper" style={{ backgroundColor: "#cebba0" }}>
                    <div class="head">
                        <h3 style={{ color: "#bc7e21" }}>4%</h3>
                        <FaArrowUp style={{ marginLeft: "10px", color: '#bc7e21' }} />
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
                                : '8px', marginRight: '6px',
                        }}>Booked</h2>
                        <h2 style={{
                            fontSize
                                : '8px'
                        }}>Check in</h2>
                    </div>
                </div>

                <div class="wrapper" style={{ backgroundColor: "#d7c4ee" }}>
                    <div class="head">
                        <h3 style={{ color: "#6412c8" }}>6%</h3>
                        <FaArrowUp style={{ marginLeft: "10px", color: '#6412c8' }} />
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
                                : '8px', marginRight: '6px',
                        }}>Booked</h2>
                        <h2 style={{
                            fontSize
                                : '8px'
                        }}>Check in</h2>
                    </div>
                </div>

                <div class="wrapper" style={{
                    justifyContent: 'center', alignItems: 'center', textAlign: 'center', border: 'dashed 1px #a1a6ac'
                }}>
                    <FaPlus style={{ paddingTop: '35px' }} />
                    <h1 style={{ fontSize: '10px', }}>Add new Object</h1>
                </div>
            </div >

            <div style={{ marginTop: '10px' }}>
                <img src={Graph} alt="graph" height='250px' style={{ border: '1px solid grey', borderRadius: '14px' }} />
            </div>
        </div >
    )
}

export default WelcomeScreen
