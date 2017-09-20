import axios from 'axios';
export default {
  getCurrentCurrency({ currency, date }) {
    const API_ENDPOINT = `http://api.fixer.io/${date}`;
    return axios({
      url: API_ENDPOINT,
      method: 'get',
      params: {
        base: currency,
      }
    }).then(response => response);
  }
}
