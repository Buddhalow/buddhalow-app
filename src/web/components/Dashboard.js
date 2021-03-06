import React from 'react';
import { Row, Col, Jumbotron, Card, CardBody } from 'reactstrap';
import moment from 'moment';
import Entry from './Entry';
import { Line, Bar } from 'react-chartjs-2';

const Dashboard = ({ data }) => (
  <div>
    <Row>
      <Jumbotron className="">
        <h3>Tao</h3>
      </Jumbotron>
    </Row>
    {data && data.entityStates &&
    <Row>
      <Col xs="12" md="12">

        <Line
          options={{
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [{
                                        gridLines: {
                                            display: false,
                                        },
                                    }],
                            yAxes: [{
                                    }],
                            },
                    }}
          width={100}
          height={640}
          data={{
            datasets: [
              {
                  label: 'yang',
                  borderColor: ['rgba(0, 120, 255, .8)'],
                  backgroundColor: 'rgba(0, 120, 220, .12)',
                  data: data.entityStates.map(o => o.yang),
              },
              {
                  label: 'yin',
                  borderColor: ['rgba(255, 0, 0, .5)'],
                  backgroundColor: 'rgba(0, 0, 0, .02)',
                  data: data.entityStates.map(o => o.yin),
              }
            ],
            labels: data.entityStates.map(o => moment(o.time).format('YYYY-MM-DD')),
          }}
        />

      </Col>
    </Row>
    }
    <Row>
      <Col xs="4" md="4" style={{ textAlign: 'center' }}>
        <h1>000 000,00</h1>
        <small>Karma</small>

      </Col>
      <Col xs="4" md="4" style={{ textAlign: 'center' }}>
        <h1>0,00</h1>
        <small>Equilibrium</small>

      </Col>
      <Col xs="4" md="4" style={{ textAlign: 'center' }}>
        <h1>1</h1>
        <small>Exp level</small>

      </Col>
    </Row>

    <hr />
    <h3>Recent activity</h3>
    {data && data.notifications && data.notifications.length > 0 && data.notifications.map((notification, i) => (
      <Row key={i} className="pt-5">
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
