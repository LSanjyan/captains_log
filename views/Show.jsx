const React = require('react');

const Show = ({ log }) => {
    return (
        <div>
            <h1>Captain's Log - {log.title}</h1>
            <p><strong>Title:</strong>{log.title}</p>
            <p><strong>Entry:</strong>{log.entry}</p>
            <p><strong>Ship Broken:</strong> {log.shipIsBroken ? 'Yes' : 'No'}</p>
            <a href="/logs">Back to Index</a>
        </div>
    )
};

module.exports = Show;