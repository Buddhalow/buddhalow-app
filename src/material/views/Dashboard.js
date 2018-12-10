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
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon/Icon';
import Fab from '@material-ui/core/Fab/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import moment from 'moment';
import Avatar from '@material-ui/core/Avatar/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';

import EnumeratedNumber from '../components/EnumeratedNumber';

import I18n from '../../I18n';
import { setHeaderImageUrl } from '../../actions/ui';
import { Line, Bar } from 'react-chartjs-2';

import View from './View';

console.log('PRODUCT', PRODUCT );

const Dashboard = ({ data, loading, error }) => (
  <View data={data} loading={loading} error={error} render={({data, loading, error}) => (
    <Grid
        direction="row"
        justify="center"
        container
        spacing={24}
        style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '55pt', padding: '10%' }}
      >
      {PRODUCT === 'buddhalow' && 
          <Grid item xs={12} md={12}>
            <Card style={{marginBottom: '12pt'}}>
              <CardHeader
                title={I18n.t('Feed')}
                subheader={I18n.t('RecentEvents')}
              />
              <CardContent>
                <Line
                  options={{
                      maintainAspectRatio: false,
                      scales: {
                        xAxes: [{
                          gridLines: {
                              display: false,
                          },
                        }],
                        yAxes: [{
                        }],
                      },
                  }}
                  width={100}
                  height={640}
                  data={{
                    datasets: [
                      {
                          label: 'yang',
                          borderColor: ['rgba(0, 120, 255, .8)'],
                          backgroundColor: 'rgba(0, 120, 220, .12)',
                          data: data.entityStates.map(o => o.yang),
                      },
                      {
                          label: 'yin',
                          borderColor: ['rgba(255, 0, 0, .5)'],
                          backgroundColor: 'rgba(0, 0, 0, .02)',
                          data: data.entityStates.map(o => o.yin),
                      }
                    ],
                    labels: data.entityStates.map(o => moment(o.time).format('YYYY-MM-DD')),
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
      }
      {PRODUCT === 'buddhalow' &&
        <Grid container spacing={24}>
          <Grid item xs={12} md={12}>
            <Card style={{marginBottom: '12pt'}}>
              <CardHeader
                title={I18n.t('Feed')}
                subheader={I18n.t('RecentEvents')}
              />
              <CardContent>
                {data.notifications && data.notifications.length > 0 ? data.notifications.slice(0, 5).map(row => (
                <article>
                  <Typography>{row.name}</Typography>
                  <Typography>{moment(row.time).fromNow()}</Typography>
                  <Typography>{row.description}</Typography>
                </article>
                )) : <span></span>}
              </CardContent>
            </Card>
          </Grid> 
        </Grid>
      }

      {PRODUCT === 'celebrify' &&
        <Grid item xs={12} md={12}>
          {data.summary &&
            <Card>
              <CardHeader
                title="Summary"
                subheader="Last 30 days"
              />
              <CardContent>
                <Grid style={{flexDirection: 'row', display: 'flex'}}>
                  <Grid item md={4}>
                    <EnumeratedNumber number={data.summary.pitches} text={I18n.t('PitchesSent')} />
                  </Grid>
                  <Grid item md={4}>
                    <EnumeratedNumber number={data.summary.exposures} text={I18n.t('Exposures')} />
                  </Grid>
                  <Grid item md={4}>
                    <EnumeratedNumber number={data.summary.reach} text={I18n.t('TotalReach')} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          }
        </Grid>
      }
      {PRODUCT === 'celebrify' ?
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader
              title="Recent pitches"
            />
            <CardContent>
              <List>
                {data.pitches && data.pitches.length > 0 ? data.pitches.slice(0, 5).map(row => (
                  <ListItem component={Link} to={`/dashboard/pitch/${row.id}`} button key={row.id}>
                    <Avatar>
                      <Icon>star</Icon>
                    </Avatar>
                    <ListItemText primary={row.channel.id} />
                  </ListItem>
                  )) : <div />}
                  <ListItem>
                    <Button component={Link} to="/dashboard/pitches" variant="flat" color="primary">{I18n.t('ShowAll')}</Button>
                  </ListItem>
                </List>
              </CardContent>
          </Card>
        </Grid> : null
      }
      {PRODUCT === 'celebrify' ?
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader
              title="Recent opportunities"
            />
            <CardContent>
              <List>
                {data.opportunities && data.opportunities.length > 0 ? data.opportunities.slice(0, 5).map(row => (
                  <ListItem component={Link} to={`/dashboard/opportunity/${row.id}`} button key={row.id}>
                    <Avatar>
                      <Icon>star</Icon>
                    </Avatar>
                    <ListItemText primary={row.pitch.channel.id} />
                  </ListItem>
                  )) : <div />}
                  <ListItem>
                    <Button component={Link} to="/dashboard/opportunities" variant="flat" color="primary">{I18n.t('ShowAll')}</Button>
                  </ListItem>
                </List>
              </CardContent>
          </Card>
        </Grid> : null
      }
      {PRODUCT === 'celebrify' ?
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader
              title="Recent exposures"
            />
            <CardContent>
              <List>
                {data.exposures && data.exposures.length > 0 ? data.exposures.slice(0, 5).map(row => (
                  <ListItem component={Link} to={`/dashboard/exposure/${row.id}`} button key={row.id}>
                    <Avatar>
                      <Icon>star</Icon>
                    </Avatar>
                    <ListItemText primary={row.opportunity.pitch.channel.id} secondary={moment(row.time).fromNow() + ' | 000,000'} />
                  </ListItem>
                  )) : <div />}
                  <ListItem>
                    <Button component={Link} to="/dashboard/exposures" variant="flat" color="primary">{I18n.t('ShowAll')}</Button>
                  </ListItem>
                </List>
              </CardContent>
          </Card>
        </Grid> : null
      }
      
      {PRODUCT === 'cravity' ?
        <Grid item xs={12} md={12}>
          <Card>
            <CardHeader
              title="Overview"
              subheader="Evolution"
            />
            <CardContent>
            {data.summary &&
              <Grid>
                <Grid item md={4}>
                  <EnumeratedNumber number={-data.summary.costs} text={I18n.t('TotalCosts')} />
                </Grid>
              </Grid>
            }
              <Line
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                        },
                    }],
                    yAxes: [{
                    }],
                  },
                }}
                width={100}
                height={640}
                data={{
                  datasets: [
                    {
                        label: 'cravings',
                        borderColor: ['rgba(255, 120, 0, .8)'],
                        backgroundColor: 'rgba(255, 120, 0, .12)',
                        data: data.statistics.map(o => -o.cravings),
                    },
                    {
                        label: 'healings',
                        borderColor: ['rgba(0, 255, 0, .8)'],
                        backgroundColor: 'rgba(0 255, 0, .12)',
                        data: data.statistics.map(o => o.healings),
                    },
                    {
                        label: 'seminations',
                        borderColor: ['rgba(0, 120, 255, .8)'],
                        backgroundColor: 'rgba(0, 120,255, .12)',
                        data: data.statistics.map(o => o.seminations),
                    },
                    {
                        label: 'seminations',
                        borderColor: ['rgba(0, 120, 255, .8)'],
                        backgroundColor: 'rgba(0, 120, 255, .12)',
                        data: data.statistics.map(o => -o.seminations),
                    }
                  ],
                  labels: data.statistics.map(o => moment(o.date).format('YYYY-MM-DD')),
                }}
              />
            </CardContent>
          </Card>
        </Grid> : null
      }

      {PRODUCT === 'cravity' ?
        <Grid item xs={12} md={6}>
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
                <ListItem>
                    <Button component={Link} to="/dashboard/seminations" variant="flat" color="primary">{I18n.t('ShowAll')}</Button>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid> : null
      }

      {PRODUCT === 'cravity' ?
        <Grid item xs={12} md={6}>
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
                <ListItem>
                  <Button component={Link} to="/dashboard/cravings" variant="bordered" color="primary">{I18n.t('ShowAll')}</Button>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid> : null
      }
      {PRODUCT === 'cravity' ?
        <Fab style={{ position: 'fixed', right: '23pt', bottom: '23pt' }} color="primary" aria-label="Add">
          <Icon>add</Icon>
        </Fab> : null
      }
    </Grid>
   )} />
);

Dashboard.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Dashboard;
