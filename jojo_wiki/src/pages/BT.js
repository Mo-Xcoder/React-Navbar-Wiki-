import React from 'react';
import BTIMG from '../images/BT.jpg';
import { SideBarData } from '../components/SideBarData';
import { Link } from 'react-router-dom'

function BT() {
    return (
        <div className="BT">
            <div className="header">
                <h1 className="Title">JoJo P2 - Battle Tendancy</h1>
            </div>

            <div className="main">
                <img className="Image" src={BTIMG} alt="picture of battle tendancy" />
                <p className="main-text">Battle Tendency is the 2nd part of the "JoJo's Bizzare Adventure" Series Writen by Hirohiko Araki. <br/>
                (spoilers start from here.) Battle Tendency starts in the 1930's, 3 generations after "Jonathon Joestar" and <Link to="/PB">Phantom Blood.</Link> 
                The main character is "Joseph Joestar" grandson of "Jonathon Joestar". He goes on a mission to stop <strong>4 Literal Aztec Gods from world domination</strong> With his new ally "Caesar Zeppeli" and training
                from Lisa Lisa ( which he didnt know, was his mother that left him ) and a family friend, Speedwagon. Joseph lost a few friends on the way... and his right hand. 
                </p>
            </div>
        </div>
    )
}

export default BT;
