import React, { Component } from 'react';
import './summary.css';

class Summary extends Component{
    render(){
    return (
        <div>
            <div class="searched-place" id="searched-place">
                <span id="place">Chennai
                </span>
            </div>
            <div class="day" id="current-day">
                <span id="day">Monday</span>
            </div>
            <div class="weather-condition">
                <p id="condition">Cloudy</p>
            </div>
        </div>
    );
}
}

export default Summary