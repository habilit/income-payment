import React, { useState, useEffect } from 'react';

export default function WorkRateItem () {
  const [workRates, setWorkRates] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/habilit/income-payment/work-rates')
      .then(res => res.json())
      .then(data => setWorkRates(data))
  }, [])

  const renderWorkRateList = () => {
    if (workRates.length === 0) {
      return (<div>No Data</div>)
    }

    workRates.map((workRate, index) => {
      return (<WorkRateItem key={index} item={workRate} />);
    })
  }

  return (<div>
    {renderWorkRateList()}
  </div>)
}