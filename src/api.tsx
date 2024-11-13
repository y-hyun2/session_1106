export async function fetchCoins() {
    return fetch("https://api.coinpaprika.com/v1/coins")
      .then((Response) => Response.json())
      .then((data) => data.slice(0, 100));
  }
  