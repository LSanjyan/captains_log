const React = require('react');

const Index = ({ logs }) => {
  return (
    <div>
      <h1>Captain's Log - Index</h1>
      <link rel="stylesheet" type="text/css" href="/style.css" />
      <ul>
        {logs.map(log => (
          <li key={log._id}>
           <a href={`/logs/${log._id}`}>{log.title}</a>
           <a href={`/logs/${log._id}/edit`}>Edit</a>
           <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
            <button type="submit">Delete</button>
           </form>
          </li>
        ))}
      </ul>
      <a href="/logs/new">Create a New Log</a>
     
    </div>
  );
};

module.exports = Index;
