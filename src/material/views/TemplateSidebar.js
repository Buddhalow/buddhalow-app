import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../config';

import theme from '../theme/index';
import DrawerHeader from '../components/DrawerHeader';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core';
import InputBase from "@material-ui/core/InputBase/InputBase";
import {fade} from "@material-ui/core/styles/colorManipulator";


const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
      boxShadow: 'inset 0pt 0pt 1pt rgba(0, 0, 0, .9), 0pt 0pt 1pt rgba(255, 255, 255, .9)',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class TemplateSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount() {
    const style = document.createElement('style');
    style.innerHTML = 'body, html { padding: 0pt; margin: 0pt; height: 100%} body { background-color: #eee}';
    document.head.appendChild(style);
    let link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
    document.head.appendChild(link);
  }
  toggleDrawer = (open) => {
    this.setState({
      open,
    });
  }
  render = () => {
    const { children, classes } = this.props;
    const { open } = this.state;
    console.log(this.state);
    return (
      <MuiThemeProvider theme={theme}>
        <header style={{
 padding: '0pt', position: 'fixed', top: '0pt', width: '100%',
}}
        >
          <AppBar position="static">
            <Toolbar>
              <IconButton onClick={() => this.toggleDrawer(true)} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
                  Dashboard
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Icon>search</Icon>
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
              <Button component={Link} to="/dashboard/notifications">
                <Icon>notifications</Icon>
              </Button>
              <Button component={Link} to="/dashboard/account">
                <Icon>person</Icon>
              </Button>
            </Toolbar>
          </AppBar>
          <SwipeableDrawer
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            open={open}
            onClose={() => this.toggleDrawer(false)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={() => this.toggleDrawer(false)}
              onKeyDown={() => this.toggleDrawer(false)}
            >

              <DrawerHeader>
                <div style={{
flexDirection: 'row', display: 'flex', alignItems: 'flex-end', padding: '20pt',
}}
                >
                  <Avatar />
                  <div style={{ flexDirection: 'column' }}>
                    <h3>User</h3>
                    <p>user@example.com</p>
                  </div>
                </div>
              </DrawerHeader>
              <List>
                {['Dashboard'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                  ))}
              </List>
            </div>
          </SwipeableDrawer>
        </header>
        <main>
          {children}
        </main>
      </MuiThemeProvider>
    );
  }
}

TemplateSidebar.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default withStyles(styles)(TemplateSidebar);
