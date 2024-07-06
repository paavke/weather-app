import React from 'react';
import './RecentSearches.css';

const RecentSearches = ({ searches, onSearch }) => (
    <div className="recent-searches">
        <h3>Recent Searches</h3>
        <ul>
            {searches.map((city, index) => (
                <li key={index} onClick={() => onSearch(city)}>{city}</li>
            ))}
        </ul>
    </div>
);

export default RecentSearches;
