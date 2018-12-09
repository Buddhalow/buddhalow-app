import React from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';
import moment from 'moment';
import PageHeader from './PageHeader';

class FungalTreatmentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
    };
  }
  async componentDidMount() {

  }
  render() {
    const { result } = this.props;
    if (!result || !result.infection) {
      return React.createElement(
        'div',
        {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          },
        },
        React.createElement(
          'bungalow-loader',
          null,
        ),
      );
    }
    return (
      React.createElement(
        'div',
        {
          className: '',
          style: {
            padding: '0pt',
          },
        },
        React.createElement(
          PageHeader,
          {
            object: {
              name: result.infection.name,
              type: 'fungal infection',
              by: {
                id: '',
                name: 'Trichophyton Rubrum',
                type: 'fungi',
              },
            },
          },
        ),
        React.createElement(
          'div',
          {
            className: 'header',
          },
          React.createElement(
            'div',
            {
              className: 'container',
            },
            React.createElement(
              Line,
              {
                min: -280000,
                max: 0,
                step: 100000,
                data: {
                  labels: this.labels,
                  datasets: [
                    {
                      label: this.label,
                      borderColor: [this.color || getComputedStyle(document.body).getPropertyValue('--brand-primary')],
                      backgroundColor: 'transparent',
                      data: result.infection.days.map(o => o.balance),
                    },
                  ],
                  labels: result.infection.days.map(o => moment(o.time).format('YYYY-MM-DD')),
                },
                options: {
                  scales: {
                    yAxes: [{
                      ticks: {
                        max: 0,
                        stepSize: this.step,
                      },
                    }],
                  },
                },
                style: {
                  height: '200pt',
                },
              },
            ),
          ),
        ),
        React.createElement(
          'bungalow-tabbar',
          null,
          React.createElement(
            'bungalow-tab',
            {
              'data-id': 'overview',
            },
            ('treatment-log'),
          ),
          React.createElement(
            'bungalow-tab',
            {
              'data-id': 'transactions',
            },
            ('transactions'),
          ),
        ),
        React.createElement(
          'bungalow-tabcontent',
          {
            className: '',
            id: 'overview',
          },
          React.createElement(
            'div',
            {
              className: '',
            },

            React.createElement(
              'table',
              {
                width: '100%',
                className: 'table',
              },
              React.createElement(
                'thead',
                null,
                React.createElement(
                  'tr',
                  null,
                  React.createElement(
                    'th',
                    null,
                    ('treatment'),
                  ),
                  React.createElement(
                    'th',
                    null,
                    ('time'),
                  ),
                ),
              ),
              React.createElement(
                'tbody',
                null,
                result.infection && result.infection.fungaltreatmentSet.map((o, i) => React.createElement(
                  'tr',
                  {
                    key: i,
                  },
                  React.createElement(
                    'td',
                    null,
                    o.id,
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(
                      'span',
                      {
                        style: {
                          opacity: 0.5,
                        },
                      },
                      moment(o.time).fromNow(),
                    ),
                  ),
                )),
              ),
            ),
          ),
        ),
        React.createElement(
          'bungalow-tabcontent',
          {
            className: '',
            style: {
              display: 'none',
            },
            id: 'transactions',
          },
          React.createElement(
            'div',
            {
              className: '',
            },

            React.createElement(
              'table',
              {
                width: '100%',
                className: 'table table-bordered',
              },
              React.createElement(
                'thead',
                null,
                React.createElement(
                  'tr',
                  null,
                  React.createElement(
                    'th',
                    null,
                    ('treatment'),
                  ),
                  React.createElement(
                    'th',
                    null,
                    ('infection'),
                  ),
                  React.createElement(
                    'th',
                    null,
                    ('amount'),
                  ),
                  React.createElement(
                    'th',
                    null,
                    ('balance'),
                  ),
                  React.createElement(
                    'th',
                    null,
                    ('time'),
                  ),
                ),
              ),
              React.createElement(
                'tbody',
                null,
                result.infection.fungaltransactionSet.map((o, i) => React.createElement(
                  'tr',
                  {
                    key: i,
                  },
                  React.createElement(
                    'td',
                    null,
                    o.id,
                  ),
                  React.createElement(
                    'td',
                    null,
                    'Darkcember',
                  ),
                  React.createElement(
                    'td',
                    {
                      style: {
                        textAlign: 'right',
                      },
                    },
                    `${numeral(o.amount).format('0,00.00')} QIH`,
                  ),
                  React.createElement(
                    'td',
                    {
                      style: {
                        textAlign: 'right',
                      },
                    },
                    `${numeral(o.balance).format('0,00.00')} QIH`,
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(
                      'span',
                      {
                        style: {
                          opacity: 0.5,
                        },
                      },
                      moment(o.time).fromNow(),
                    ),
                  ),
                )),
              ),
            ),
          ),
        ),
      )
    );
  }
}


export default FungalTreatmentsList;
