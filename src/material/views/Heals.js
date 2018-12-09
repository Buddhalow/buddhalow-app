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
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Heals = ({ data }) => (
	data ?
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
			      title="Heals"
			    />
			    <CardContent>
			    	{data.heals && data.heals instanceof Array ?
			    		<Table>
				    		<TableHead>
				    			<TableRow>
					    			<TableCell>Location</TableCell>
					    			<TableCell>Healed</TableCell>
				    			</TableRow>
				    		</TableHead>
				    		<TableBody>
				    		{data.heals.length > 0 ? data.heals.map(row => (
				    			<TableRow>
				    				<TableCell>
				    					{row.restaurant ? <Button component={Link} to={`/dashboard/restaurant/${row.id}`}>{row.restaurant.name}</Button> : <span>-</span>}
				    				</TableCell>
				    				<TableCell>
				    					{moment(row.time).fromNow()}
				    				</TableCell>
				    			</TableRow>
				    		)): <p>No heals found</p>}
				    		</TableBody>
				    	</Table>
				    : 	<CircularProgress />}
				</CardContent>
			</Card>
		</Grid>
	</Grid> : <CircularProgress />
)

export default Heals;