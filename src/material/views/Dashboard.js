import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Table from '@material-ui/core/Table/Table';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableBody from '@material-ui/core/TableBody/TableBody';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper/Paper';

const Dashboard = ({ data }) => (
  data && data.entityStates ?
    <Grid container spacing={24} style={{ paddingTop: '55pt' }}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Feed" />
          <CardContent>
            <List>
              {data.notifications && data.notifications.slice(0, 5).map(row => (
                <ListItem button component={Link} to={`/dashboard/notification/${row.id}`}>
                  <ListItemText>
                    {row.name}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader
            title="Recent opportunities"
          />
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Opportunity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.opportunities && data.opportunities.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                  </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>
    </Grid> : <div />
);

Dashboard.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Dashboard;
