const React = require('react');

const Edit = ({ log }) => {
    return (
        <div>
            <h1>Edit Captain's Log - {log.title}</h1>
            <form action={`/logs/${log._id}?_method=PUT`} method="POST">
            <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" defaultValue={log.title} required /><br />

        <label htmlFor="entry">Entry:</label>
        <textarea id="entry" name="entry" rows="4" defaultValue={log.entry} required></textarea><br />

        <label htmlFor="shipIsBroken">Is the Ship Broken?</label>
        <select id="shipIsBroken" name="shipIsBroken" defaultValue={log.shipIsBroken ? 'true' : 'false'}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select><br />

        <button type="submit">Save Changes</button>   
      </form>
      <a href={`/logs/${log._id}`}>Back to Log</a>
        </div>
    );
};

module.exports = Edit;