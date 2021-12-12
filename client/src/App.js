import React from 'react';
import TickersTable from './components/TickersTable';
import socket from './socket';
import { useDispatch } from 'react-redux';
import setTickers from './redux/actions/tickers';

socket.emit('start');

function App() {
  const dispath = useDispatch();

  React.useEffect(() => {
    socket.on('ticker', function (data) {
      dispath(setTickers(data));
    });
  });

  return (
    <div className="App">
      <TickersTable />
    </div>
  );
}

export default App;
