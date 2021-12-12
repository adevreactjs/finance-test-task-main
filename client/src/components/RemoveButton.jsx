import React from 'react';
import { useDispatch } from 'react-redux';
import deleteTickers from '../redux/actions/deleteTickers';
import socket from '../socket';

export default function RemoveButton({ ind }) {
  const dispath = useDispatch();

  const deleteTikers = (index) => {
    socket.emit('removeTicker', index);
    dispath(deleteTickers(index));
  };

  return (
    <button
      onClick={() => deleteTikers(ind)}
      type="button"
      className="btn-close"
      aria-label="Close"></button>
  );
}
