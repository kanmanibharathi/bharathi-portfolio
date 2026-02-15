import React, { useState, useEffect } from 'react';
import './BatteryIndicator.css';

const BatteryIndicator = () => {
    const [batteryLevel, setBatteryLevel] = useState(100);
    const [remainingDays, setRemainingDays] = useState(0);

    useEffect(() => {
        const calculateLifespan = () => {
            const birthDate = new Date('1998-02-20');
            const totalLifespanYears = 60;
            const endDate = new Date(birthDate.getTime());
            endDate.setFullYear(birthDate.getFullYear() + totalLifespanYears);

            const now = new Date();
            const totalMs = endDate.getTime() - birthDate.getTime();
            const remainingMs = Math.max(0, endDate.getTime() - now.getTime());

            setRemainingDays(Math.floor(remainingMs / (1000 * 60 * 60 * 24)));

            let percentage = (remainingMs / totalMs) * 100;
            percentage = Math.max(0, Math.min(100, percentage));

            setBatteryLevel(percentage.toFixed(2));
        };

        calculateLifespan();
        // Update every day (86400000 ms)
        const interval = setInterval(calculateLifespan, 86400000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="battery-container" title={`${remainingDays.toLocaleString()} days remaining`}>
            <div className="battery-outer">
                <div
                    className={`battery-inner ${batteryLevel < 25 ? 'low-battery' : ''}`}
                    style={{ width: `${batteryLevel}%` }}
                ></div>
                <div className="battery-shine"></div>
            </div>
            <div className="battery-cap"></div>
            <span className="battery-percentage">{Math.round(batteryLevel)}%</span>
        </div>
    );
};

export default BatteryIndicator;
