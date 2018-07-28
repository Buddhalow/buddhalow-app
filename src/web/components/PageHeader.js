import React from 'react'

const PageHeader = ({children, object}) => (
    <div style={{display: 'flex', flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, .28)'}}>
        <div style={{flexGrow: '0 0 25%', padding: 20}}></div>
        <div style={{flex: 1, padding: 20}}>
            <h1>{object.name}</h1>
            <p>{object.description}</p>
            <button className="btn btn-primary">...</button>
        </div>
    </div>
)

export default PageHeader