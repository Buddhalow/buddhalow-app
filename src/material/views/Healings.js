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

const Healins = ({ data }) => (
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
			      title="Healings"
			    />
			    <CardContent>
			    	{data.cravings && data.cravings instanceof Array ?
			    		<Table>
				    		<TableHead>
				    			<TableRow>	
					    			<TableCell>Location</TableCell>
					    			<TableCell>Reason</TableCell>
					    			<TableCell>Healed</TableCell>
				    			</TableRow>
				    		</TableHead>
				    		<TableBody>
				    		{data.cravings.length > 0 ? data.cravings.map(row => (
				    			<TableRow>
				    				<TableCell>
				    					<Icon>heart</Icon>{row.restaurant ? <Button color="primary" component={Link} to={`/dashboard/restaurant/${row.id}`}>{row.restaurant.name}</Button> : <span>-</span>}
				    				</TableCell>
				    				<TableCell>
				    					{row.reason ? <Button component={Link} to={`/dashboard/reason/${row.id}`}>{row.reason.name}</Button> : <span>-</span>}
				    				</TableCell>
				    				<TableCell>
				    					{moment(row.time).fromNow()}
				    				</TableCell>
				    			</TableRow>
				    		)): <p>No healings found</p>}
				    		</TableBody>
				    	</Table>
				    : 	<CircularProgress />}
				</CardContent>
			</Card>
		</Grid>
	</Grid> : <CircularProgress />
)

export default Healings;