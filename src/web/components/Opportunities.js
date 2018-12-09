import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from './PageHeader';

// eslint-disable-next-line react/prop-types
const Fungalify = ({ result }) => (
  <div>
    <PageHeader object={{ name: 'Fungal Infections' }} />
    <table className="table">
      <thead>
        <tr>
          <th>Infection</th>
        </tr>
      </thead>
      <tbody>
        {result && result.opportunities && result.opportunities.map((infection, i) => (
          <tr key={i}>
            <td><Link to={`/opportunity/${infection.id}`}>{infection.name}</Link></td>
          </tr>
                ))}
      </tbody>
    </table>
  </div>
);

export default Fungalify;
