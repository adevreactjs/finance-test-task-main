import React from 'react';

export default function AddTickersButton({ addTickers }) {
  return (
    <button onClick={() => addTickers()} type="button" className="btn btn-primary mb-2">
      Add Tickers
    </button>
  );
}
