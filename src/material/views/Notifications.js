import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Table from '@material-ui/core/Table/Table';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableBody from '@material-ui/core/TableBody/TableBody';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import View from './View';

const Notifications = ({ data, loading, error }) => (
	<View data={data} loading={loading} error={error} render={({data, loading, error}) => (
  	
		<Grid
	      direction="row"
	      justify="center"
	      container
	      spacing={24}
	      style={{ paddingTop: '55pt', padding: '10%'}}
	    >
	    	<Grid item md={12}>
				<Card>
				    <CardHeader
				      title="Feed"
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
	)} />
)

export default Notifications;