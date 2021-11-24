import axios from 'axios';

export function requestGetWorkRate() {
  return axios.request({
    method: 'GET',
    url: 'https://my-json-server.typicode.com/habilit/income-payment/work-rates',
  })
}