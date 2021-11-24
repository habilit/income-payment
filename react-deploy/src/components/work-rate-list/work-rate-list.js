import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

export default function WorkRateList () {
  const [workRates, setWorkRates] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/habilit/income-payment/work-rates')
      .then(res => res.json())
      .then(data => setWorkRates(data))
  }, [])

  const renderWorkRateList = () => {
    console.log('workRates ', workRates);
    if (workRates.length === 0) {
      return (<div>No Data</div>)
    }

    return workRates.map((workRate, index) => {
      return (<ListGroup.Item key={index} as="li" className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{workRate.work_name}</div>
          {workRate.rate}
          <Badge variant="primary" pill>14</Badge>
        </div>
      </ListGroup.Item>);
    })

  }


  return (
    <ListGroup as="ol" numbered>
      {renderWorkRateList()}
    </ListGroup>)
}