import React from 'react'
import "../App.css";
import Bookinglist from './BookingList';
import WelcomeScreen from './welcomeScreen';

const Midcontainer = () => {
    return (
        <div className="container">
            <div style={{ width: '65%', }}>
                <WelcomeScreen />
            </div>
            <div style={{ width: '35%' }}>
                <Bookinglist />
            </div>

        </div >
    )
}

export default Midcontainer
