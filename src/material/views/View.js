import React from 'react';

import Grid from '@material-ui/core/Grid';

import CircularProgress from '@material-ui/core/CircularProgress';

const View = ({data, loading, error, children, render}) => {
	return (
		loading ? 
		<Grid
	      direction="row"
	      justify="center"
	      container
	      spacing={24}
	      style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: '55pt', padding: '10%' }}
	    >
	    	<CircularProgress />
	    </Grid> :

	    data !== undefined && Object.keys(data).length > 0 && !error ? render({data, loading, error, children}) : <Grid
	      direction="row"
	      justify="center"
	      container
	      spacing={24}
	      style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: '55pt', padding: '10%' }}
	    >
	    	An error occured.
	    </Grid>
	)
}


export default View;