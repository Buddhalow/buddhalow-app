import React from 'react'


const Housing = () => (
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
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'h1',
                        null,
                        ('housing')
                    ),
                    this.state.result.bungalows.length > 0 ? React.createElement(
                        'span',
                        null,
                        ''
                    ) : ''
                )
            ),             
            React.createElement(
                'h1',
                null,
                ('bungalows')
            ),
            this.state.result.bungalows.length > 0 ? React.createElement(
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
                    this.state.result.bungalows.map((o, i) => {
                        return React.createElement(
                            'tr',
                            {
                                key: i,
                                className: o.leaved !== null ? 'disabled' : '' 
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
                                    'bungalow-a',
                                    {
                                        href: 'bungalow:bungalow:' +  o.id
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
                                    ago(o.time)
                                )
                            ),
                        )
                    })
                )
            ) : '',         
            React.createElement(
                'h1',
                null,
                ('accounts')
            ),
            this.state.result.accounts.length > 0 ? React.createElement(
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
                            ('account')
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
                    this.state.result.accounts.map((o, i) => {
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
                                    'bungalow-a',
                                    {
                                        href: 'bungalow:facility:' +  o.id
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
                                    ago(o.time)
                                )
                            ),
                        )
                    })
                )
            ) : ''
        ) 
    )
)

export default Housing