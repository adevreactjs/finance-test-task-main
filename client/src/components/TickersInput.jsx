import React from 'react';

export default function TickersInput({ ticker, ind, addTickers }) {
  return (
    <label className="list-group-item">
      <input
        onClick={() => addTickers(ind)}
        className="form-check-input me-1"
        type="checkbox"
        value=""></input>
      {ticker}
    </label>
  );
}
