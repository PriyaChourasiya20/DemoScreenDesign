import React from 'react'
import "../App.css";
import Bookinglist from './BookingList';
import WelcomeScreen from './welcomeScreen';

const Midcontainer = () => {
    return (
        <div className="container">
            <div style={{ width: '60%', }}>
                <WelcomeScreen />
            </div>
            <div style={{ width: '30%' }}>
                <Bookinglist />
            </div>

        </div >
    )
}

export default Midcontainer
