import React  from 'react';
import WorkRateList from './components/work-rate-list/work-rate-list';
import SummaryTab from './components/summary-tab/summary_tab';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SummaryTab />
        <Container>
          <Row>
            <Col><WorkRateList key="work-rate" /></Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
