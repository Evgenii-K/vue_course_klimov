const API_KEY =
  "c8bcd3d15adb1171007f00c97a7a566fe64ae0fae33f7b6bd1aaa66326f31dac";

export const loadTicker = (tickerName) =>
  fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=${API_KEY}`
  ).then((res) => {
    return res.json();
  });

export const getTickerName = () =>
  fetch("https://min-api.cryptocompare.com/data/all/coinlist?summary=true", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return Object.keys(res.Data);
    })
    .catch((err) => {
      if (err) {
        console.warn(err);
      }});