import React from 'react'
import moment from 'moment'
import numeral from 'numeral'
import {Link} from 'react-router-dom'
import PageHeader from './PageHeader'
import {Line} from 'react-chartjs-2'

let i18n = {
    t: (str) => str
}

const Bungalow = ({result}) => {
    if (!result || !result.bungalow) {
        return  React.createElement(
            'div',
            {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%'
                }
            },
            React.createElement(
                'bungalow-loader',
                null
            )
        )
    }

    return (
        React.createElement(
            'div',
            {
                className: '',
                style: {
                    padding: '0pt'
                }
            },
            React.createElement(
                PageHeader,
                {
                    object: {
                        name: 'Getingen'
                    }
                }
            ),
            React.createElement(
                'div',
                {
                    className: 'header'
                },
                React.createElement(
                    'div',
                    {
                        className: 'container'
                    },
                    React.createElement(
                        Line,
                        {
                            min: -280000,
                            max: 0,
                            step: 100000,
                            data: {
                                datasets: [
                                    {
                                        label: 'Entropy',
                                        borderColor: [getComputedStyle(document.body).getPropertyValue('--brand-primary')],
                                        backgroundColor: 'transparent',
                                        data: result.bungalow.transactionSet.map(o => o.balance),
                                    }
                                ],
                                labels: result.bungalow.transactionSet.map(o => moment(o.time).format('YYYY-MM-DD'))
                            },
                            options: {
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            min: -500,
                                            max: 0,
                                            stepSize: 50 
                                        }   
                                    }]
                                }
                            },  
                            style: {
                                height: '200pt'
                            }
                        }
                    )
                )
            ),             
            React.createElement(
                'bungalow-tabbar',
                null,
                React.createElement(
                    'bungalow-tab',
                    {
                        'data-id': 'overview'
                    },
                    i18n.t('overview')
                ),
                React.createElement(
                    'bungalow-tab',
                    {
                        'data-id': 'transactions'
                    },
                    i18n.t('transactions')
                ),
            ),
            React.createElement(
                'bungalow-tabcontent',
                {
                    className: '',
                    'id': 'overview'
                },
                React.createElement(
                    'div',
                    {
                        className: ''
                    },
                    React.createElement(
                        'h2',
                        null,
                        i18n.t('accounts')
                    ),
                    React.createElement(
                        'table',
                        {
                            width: '100%',
                            className: 'table table-bordered'
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
                                    i18n.t('account')
                                )
                            )
                        ),
                        React.createElement(
                            'tbody',
                            null,
                            result.bungalow.accountSet.map((o, i) => {
                                return React.createElement(
                                    'tr',
                                    {
                                        key: i
                                    },
                                    React.createElement(
                                        'td',
                                        null,
                                        React.createElement(
                                            Link,
                                            {
                                                to: `/bungalow/account/${o.id}`
                                            },
                                            o.name
                                        )
                                    )
                                    
                                )
                            })
                        )
                    )
                )
            ),
            React.createElement(
                'bungalow-tabcontent',
                {
                    className: '',
                    style: {
                        display: 'none'
                    },
                    'id': 'transactions'
                },
                React.createElement(
                    'div',
                    {
                        className: ''
                    },
                    
                    React.createElement(
                        'table',
                        {
                            width: '100%',
                            className: 'table table-bordered'
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
                                    i18n.t('effort')
                                ),                                    
                                React.createElement(
                                    'th',
                                    null,
                                    i18n.t('bungalow')
                                ),
                                React.createElement(
                                    'th',
                                    null,
                                    i18n.t('amount')
                                ),
                                React.createElement(
                                    'th',
                                    null,
                                    i18n.t('balance')
                                ),
                                React.createElement(
                                    'th',
                                    null,
                                    i18n.t('time')
                                )
                            )
                        ),
                        React.createElement(
                            'tbody',
                            null,
                            result.bungalow.transactionSet.map((o, i) => {
                                return React.createElement(
                                    'tr',
                                    {
                                        key: i
                                    },
                                    React.createElement(
                                        'td',
                                        null,
                                        o.id
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        'Darkcember'
                                    ),
                                    React.createElement(
                                        'td',
                                        {
                                            style: {
                                                textAlign: 'right'
                                            }
                                        },
                                        numeral(o.amount).format('0,00.00') + ' QIH'
                                    ),
                                    React.createElement(
                                        'td',
                                        {
                                            style: {
                                                textAlign: 'right'
                                            }
                                        },
                                        numeral(o.balance).format('0,00.00') + ' QIH'
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        React.createElement(
                                            'span',
                                            {
                                                style: {
                                                    opacity: 0.5
                                                }
                                            },
                                            moment(o.time).fromNow()
                                        )
                                    )
                                )
                            })
                        )
                    )
                )
            )
        )
    )
}
        

export default Bungalow