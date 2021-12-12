import React from 'react';
import TickersInput from './TickersInput';
import socket from '../socket';
import { useDispatch } from 'react-redux';
import setTickers from '../redux/actions/tickers';

export default function TickersGroup() {
  const dispath = useDispatch();

  const tickers = [
    'AAPL', // Apple
    'GOOGL', // Alphabet
    'MSFT', // Microsoft
    'AMZN', // Amazon
    'FB', // Facebook
    'TSLA', // Tesla
  ];

  const addTickers = (index) => {
    socket.emit('addTicker', tickers[index]);
    socket.on('ticker', function (data) {
      dispath(setTickers(data));
    });
  };

  return (
    <div className="list-group">
      {tickers &&
        tickers.map((obj, ind) => (
          <TickersInput key={obj.ticker} ticker={obj} ind={ind} addTickers={addTickers} />
        ))}
    </div>
  );
}
