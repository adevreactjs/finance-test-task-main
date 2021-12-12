import React from 'react';
import socket from '../socket';

export default function ChangeInterval() {
  const [interval, setInterval] = React.useState(5000);

  const submitInterval = (e) => {
    setInterval(e.target.value);
  };

  const changeInterval = () => {
    console.log('submitInterval');
    socket.emit('fetchInterval', Number(interval));
  };

  return (
    <div className="input-group mb-3">
      <input
        value={interval}
        onChange={(e) => submitInterval(e)}
        type="text"
        className="form-control"
        placeholder="Time interval"
        aria-describedby="button-addon2"></input>
      <button
        onClick={changeInterval}
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2">
        Change interval
      </button>
    </div>
  );
}
