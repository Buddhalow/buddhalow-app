import React from 'react';
import { Row, Col, Jumbotron, Card, CardBody } from 'reactstrap';
import moment from 'moment'
import Entry from './Entry'

const Dashboard = ({data}) => (
  <div>
    <Row>
      <Jumbotron className="">
          <h1 style={{opacity: 0.2, fontSize: 110}}>Dashboard</h1>
      </Jumbotron>
    </Row>
    <Row>
        <Col xs="4" md="4" style={{textAlign: 'center'}}>
            <h1>000 000,00</h1>
            <small>Karma</small>
                
        </Col>
        <Col xs="4" md="4" style={{textAlign: 'center'}}>
            <h1>0,00</h1>
            <small>Equilibrium</small>
                
        </Col>
        <Col xs="4" md="4" style={{textAlign: 'center'}}>
            <h1>1</h1>
            <small>Exp level</small>
                
        </Col>
    </Row>
    <hr/>
    <h3>Recent activity</h3>
    {data && data.notifications && data.notifications.length > 0 && data.notifications.map((notification, i) => (
        <Row className="pt-5">
            <Col xs="12" md="12" className="pt-3 pt-md-0">
            <Entry>
                <CardBody>
                    <h1>{notification.name}</h1>
                    <small>{moment(notification.time).fromNow()}</small>
                </CardBody>
            </Entry>
            </Col>
           
        </Row>
    ))}    
  </div>
);

export default Dashboard;
