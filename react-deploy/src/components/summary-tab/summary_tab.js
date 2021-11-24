import React from 'react';
import { useSelector } from 'react-redux';

export default function SummaryTab () {
  const summary = useSelector((state) => state.workRate.summary);
  console.log('summary', summary);

  return (<div as="ol" numbered>Summary : {summary}</div>)
}