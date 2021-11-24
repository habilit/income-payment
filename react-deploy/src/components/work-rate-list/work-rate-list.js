import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, Button, Badge } from 'react-bootstrap';
import { getWorkRates, setSumWorkRates } from '../../reducers/work-rate';

export default function WorkRateList () {
  const dispatch = useDispatch(getWorkRates())

  useEffect(() => {
    dispatch(getWorkRates());
  }, [dispatch]);

  const workRates = useSelector((state) => state.workRate.workRates);
  const summary = useSelector((state) => state.workRate.summary);
  console.log('workRates', workRates);

  const addSumRate = (price) => {
    console.log('price' , price);
    dispatch(setSumWorkRates(price));
  }

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
          <Button onClick={()=> addSumRate(workRate.rate)} variant="outline-primary">ADD</Button>
        </div>
      </ListGroup.Item>);
    })
  }


  return (
    <ListGroup as="ol" numbered>
      {renderWorkRateList()}
    </ListGroup>)
}