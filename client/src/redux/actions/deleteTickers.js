const deleteTickers = (index) => ({
  type: 'DELETE_TICKERS',
  payload: index,
});

export default deleteTickers;
