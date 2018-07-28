import React from 'react'

import PageHeader from './PageHeader'

import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const Housing = ({result}) => {
    if (!result) return <div></div>
    console.log(result)

    return (
        React.createElement(
            'div',
            {
                className: '',
                style: {
                    padding: '20pt'
                }
            },
            React.createElement(
                'div',
                null,
                React.createElement(
                    PageHeader,
                    {
                        object: {
                            name: 'Housing',
                            description: 'housing'
                        }
                    }
                ), 
                result.bungalows && result.bungalows .length > 0 ? React.createElement(
                    'table',
                    {
                        width: '100%',
                        className: 'table'
                    },
                    React.createElement(
                        'thead',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'th',
                                null
                            ),  
                            React.createElement(
                                'th',
                                null,
                                ('bungalow')
                            ),                                    
                            
                            React.createElement(
                                'th',
                                null,
                                ('balance')
                            ),
                            React.createElement(
                                'th',
                                null,
                                ('entered')
                            )
                        )
                    ),
                    React.createElement(
                        'tbody',
                        null,
                        result.bungalows && result.bungalows.map((o, i) => {
                            return React.createElement(
                                'tr',
                                {
                                    key: i,
                                    className: o.leaved !== null ? 'disabled' : '' ,
                                    style: {
                                        opacity: o.leaved !== null ? 0.2 : 1
                                    }
                                }, 
                                React.createElement(
                                    'td',
                                    null,
                                    ''
                                    
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    React.createElement(
                                        Link,
                                        {
                                            to: '/bungalow/' +  o.id
                                        },
                                        o.name
                                    )
                                ),
                                React.createElement(
                                    'td',
                                    {
                                        style: {
                                            'textAlign': 'right'
                                        }
                                    },
                                    moment(o.balance).format('0,00.00')
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
                ) : '',         
                React.createElement(
                    'h1',
                    null,
                    'accounts'
                ),
                result.accounts && result.accounts.length > 0 ? React.createElement(
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
                                null
                            ),  
                            React.createElement(
                                'th',
                                null,
                                'account'
                            ),                                    
                            
                            React.createElement(
                                'th',
                                null,
                                'balance'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'entered'
                            )
                        )
                    ),
                    React.createElement(
                        'tbody',
                        null,
                        result.accounts.map((o, i) => {
                            return React.createElement(
                                'tr',
                                {
                                    key: i
                                }, 
                                React.createElement(
                                    'td',
                                    null,
                                    ''
                                    
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    React.createElement(
                                        Link,
                                        {
                                            to: '/facility/' +  o.id
                                        },
                                        o.name
                                    )
                                ),
                                React.createElement(
                                    'td',
                                    {
                                        style: {
                                            'textAlign': 'right'
                                        }
                                    },
                                    moment(o.balance).format('0,00.00')
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
                ) : ''
            ) 
        )
    )
}


export default Housing