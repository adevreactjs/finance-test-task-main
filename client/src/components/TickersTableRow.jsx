import React from 'react';
import RemoveButton from './RemoveButton';

function TickersTableRow({ num, items, ind }) {
  const changePrice = (items.price - items.change).toFixed(2);

  return (
    <tr>
      <th scope="row">{num}</th>
      <td>{items.ticker}</td>
      <td>{items.exchange}</td>
      <td>{items.price}</td>
      <td style={{ color: changePrice > 0 ? 'green' : 'red' }}>{changePrice}</td>
      <td>{items.change_percent}</td>
      <td>{items.dividend}</td>
      <td>{items.yield}</td>
      <td>
        <RemoveButton ind={ind} />
      </td>
      <td></td>
    </tr>
  );
}

export default TickersTableRow;
