import React from 'react'
import moment from 'moment'
import numeral from 'numeral'
import PageHeader from './PageHeader'

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
                        'bungalow-chart',
                        {
                            min: -280000,
                            max: 0,
                            step: 100000,
                            data: JSON.stringify(
                                result.bungalow.report.bungalowdaySet.map(o => o.balance)
                            ),
                            labels: JSON.stringify(
                                result.bungalow.report.bungalowdaySet.map(o => moment(o.time).format('YYYY-MM-DD'))
                            ),
                        
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
                    i18n.t('effort-log')
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
                                    i18n.t('time')
                                )
                            )
                        ),
                        React.createElement(
                            'tbody',
                            null,
                            result.bungalow.effortSet.map((o, i) => {
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
                                        React.createElement(
                                            'span',
                                            {
                                                style: {
                                                    opacity: 0.5
                                                }
                                            },
                                            moment(o.time).fromNow()
                                        )
                                    ),
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