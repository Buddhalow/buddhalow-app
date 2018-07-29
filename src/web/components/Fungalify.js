import React from 'react'
import { Link } from 'react-router-dom'

import PageHeader from './PageHeader'

const Fungalify = ({result}) => (
    <div>
        <PageHeader object={{name: 'Fungal Infections'}} />
        <table className="table">
            <thead>
                <tr>
                    <th>Infection</th>
                </tr>
            </thead>
            <tbody>
                {result && result.infections && result.infections.map((infection, i) => (
                    <tr key={i}>
                        <td><Link to={`/fungal/infection/${infection.id}`}>{infection.name}</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)

export default Fungalify