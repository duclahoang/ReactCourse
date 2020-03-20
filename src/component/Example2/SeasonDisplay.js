import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "It's hot",
        iconName: 'sun'
    },
    winter: {
        text: "It's chilly",
        iconName: 'snowflake'
    }
    
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    }
    else {
        return lat > 0 ? 'winter' : 'summer'
    }
}


const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth())
    const config = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`massive icon-left ${config.iconName} icon`}/>
            <h1>{config.text}</h1>
            <i className={`massive icon-right ${config.iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay