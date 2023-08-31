const React = require('react');

const New = () => {
  return (
    <div>
      <h1>Captain's Log - New Entry</h1>
      <form action="/logs" method="POST">
        <label>Title: <input type="text" name="title" /></label><br />
        <label>Entry: <textarea name="entry"></textarea></label><br />
        <label>Is the Ship Broken? <input type="checkbox" name="shipIsBroken" value="true" /></label><br />
        <input type="submit" value="Create Log" />
      </form>
    </div>
  );
};

module.exports = New;
