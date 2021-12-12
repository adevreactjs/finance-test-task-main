import React from 'react';

export default function PauseCheckBox({ ind, pauseTrackingTickets }) {
  return (
    <div className="form-check">
      <input
        onClick={() => pauseTrackingTickets()}
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckIndeterminate"></input>
      <label className="form-check-label">Stop</label>
    </div>
  );
}
