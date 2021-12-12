import React from 'react';
import { useSelector } from 'react-redux';

import TickersTableRow from './TickersTableRow';
import TickersGroup from './TickersGroup';
import AddTickersButton from './AddTickersButton';
import ChangeInterval from './ChangeInterval';

function TickersTable() {
  const [toggle, setToggle] = React.useState(false);
  const { items } = useSelector(({ tickers }) => tickers);

  const addTickers = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <table className="table caption-top">
        <caption>List of tickers</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ticker</th>
            <th scope="col">Exchange</th>
            <th scope="col">Price</th>
            <th scope="col">Change</th>
            <th scope="col">Change, %</th>
            <th scope="col">Dividend</th>
            <th scope="col">Yield</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((obj, ind) => (
              <TickersTableRow num={ind + 1} key={obj.price} items={{ ...obj }} ind={ind} />
            ))}
        </tbody>
      </table>
      <ChangeInterval />
      <AddTickersButton addTickers={addTickers} />
      {toggle && <TickersGroup key={'id1'} />}
    </>
  );
}

export default TickersTable;
