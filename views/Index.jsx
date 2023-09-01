const React = require('react');

const Index = ({ logs }) => {
  return (
    <div>
      <h1>Captain's Log - Index</h1>
      <ul>
        {logs.map(log => (
          <li key={log._id}>
            <strong>{log.title}</strong><br />
            {log.entry}<br />
            Ship Broken: {log.shipIsBroken ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
};

module.exports = Index;
