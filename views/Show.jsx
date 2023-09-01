const React = require('react');

const Show = ({ log }) => {
    return (
        <div>
            <h1>Captain's Log - {log.title}</h1>
            <p>{log.entry}</p>
            <p>Ship Broken: {log.shipIsBroken ? 'Yes' : 'No'}</p>
            <a href="/logs">Back to Index</a>
        </div>
    )
};