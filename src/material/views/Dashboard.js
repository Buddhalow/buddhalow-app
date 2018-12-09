import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PRODUCT } from 'react-native-dotenv';

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
import Icon from '@material-ui/core/Icon/Icon';
import Fab from '@material-ui/core/Fab/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import moment from 'moment';
import Avatar from '@material-ui/core/Avatar/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { translate } from '../../i18n';
import { setHeaderImageUrl } from '../../actions/ui';

console.log('PRODUCT', PRODUCT === 'cravity');

const Dashboard = ({ data }) => (
  data ?
    <Grid
      direction="row"
      justify="center"
      container
      spacing={24}
      style={{ paddingTop: '55pt', padding: '10%' }}
    >
      {PRODUCT === 'celebrify' ?
        <Grid item xs={12} md={12}>
          <Card>
            <CardHeader
              title="Recent pitchs"
            />
            <CardContent>
              <List>
                {data.pitchs && data.pitchs.length > 0 ? data.pitchs.slice(0, 5).map(row => (
                  <ListItem component={Link} to={`/dashboard/pitch/${row.id}`} button key={row.id}>
                    <Avatar>
                      <Icon>fastfood</Icon>
                    </Avatar>
                    <ListItemText primary={row.food.name} secondary={moment(row.time).fromNow()} />
                  </ListItem>
                  )) : <div />}
                  <ListItem component={Link} to="/dashboard/pitches">
                    <Avatar>
                      <Icon>fastfood</Icon>
                    </Avatar>
                    <ListItemText primary={translate('ShowAll')} />
                  </ListItem>
                </List>
              </CardContent>
          </Card>
        </Grid> : <CircularProgress />
      }

      {PRODUCT === 'cravity' ?
        <Grid item xs={12} md={12}>
          <Card>
            <CardHeader
              title="Recent seminations"
              subheader="Successful avoidance of craving strikes"
            />
            <CardContent>
              <List>
                {data.seminations ? data.seminations.slice(0, 5).map(row => (
                  <ListItem component={Link} to={`/dashboard/semination/${row.id}`} button key={row.id}>
                    <Avatar>
                      <Icon>star</Icon>
                    </Avatar>
                    <ListItemText primary={row.restaurant && row.restaurant.name} secondary={moment(row.time).fromNow()} />
                  </ListItem>
                )) : <CircularProgress />}
                <ListItem component={Link} to="/dashboard/seminations">
                  <ListItemText primary={translate('ShowAll')} />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid> : <CircularProgress />
      }

      {PRODUCT === 'cravity' ?
        <Grid item xs={12} md={12}>
          <Card>
            <CardHeader
              title="Recent cravings"
            />
            <CardContent>
              <List>
                {data.cravings ? data.cravings.slice(0, 5).map(row => (
                  <ListItem component={Link} to={`/dashboard/craving/${row.id}`} button key={row.id}>
                    <Avatar>
                      <Icon>fastfood</Icon>
                    </Avatar>
                    <ListItemText primary={row.food.name} secondary={moment(row.time).fromNow()} />
                  </ListItem>
                )) : <CircularProgress />}
                <ListItem component={Link} to="/dashboard/cravings">
                  <Avatar>
                    <Icon>fastfood</Icon>
                  </Avatar>
                  <ListItemText primary={translate('ShowAll')} />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid> : <CircularProgress />
      }
      {PRODUCT === 'cravity' ?
        <Fab style={{ position: 'fixed', right: '23pt', bottom: '23pt' }} color="primary" aria-label="Add">
          <Icon>add</Icon>
        </Fab> : null
      }
    </Grid> : <CircularProgress />
);

Dashboard.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Dashboard;
