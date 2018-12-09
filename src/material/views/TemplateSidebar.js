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
import Avatar from '@material-ui/core/Avatar/Avatar';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { connect } from 'react-redux';
import { PRODUCT } from 'react-native-dotenv';

import { colorize } from '../../actions/colors';
import theme from '../theme/index';
import DrawerHeader from '../components/DrawerHeader';
import OverBackdrop from '../components/OverBackdrop';
import { PRIMARY_COLOR } from '../config.js';


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
      fadeHeader: 0.0
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      this.setState({
        fadeHeader: window.scrollY / 200
      });
    })
    const style = document.createElement('style');
    style.innerHTML = 'body, html { padding: 0pt; margin: 0pt; height: 100%} header {z-index: 1000} body { background-color: #eee} main { width: 100%; display: flex; z-index: 1}';
    document.head.appendChild(style);
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
    document.head.appendChild(link);
    document.querySelector('#root').style.display = 'flex';
    document.querySelector('#root').style.height = '100%';
  }
  toggleDrawer = (open) => {
    this.setState({
      open,
    });
  }
  render = () => {
    const { children, classes, colorize, ui } = this.props;
    console.log('CHILDREN', children);
    const { open } = this.state;
    console.log(this.state);
    return (
      <MuiThemeProvider theme={theme}>
        <OverBackdrop style={{height: '320pt'}} source={{uri: ui.headerImageUrl}} />
        <header style={{
 padding: '0pt', position: 'fixed', top: '0pt', width: '100%',
}}
        >
          <AppBar position="static" style={{backgroundColor: fade(PRIMARY_COLOR, this.state.fadeHeader), boxShadow: '0pt 1pt 2pt rgba(0, 0, 0, ' + this.state.fadeHeader * 0.2 + ')'}}>
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
              <Button onClick={() => colorize()}>
                <Icon>brush</Icon>
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
                <ListItem button component={Link} to="/dashboard">
                  <Avatar>
                    <Icon>home</Icon>
                  </Avatar>
                  <ListItemText primary="Dashboard" />

                </ListItem>
              </List>
              {PRODUCT === 'cravity' ?
                <List>
                  <ListItem button component={Link} to="/dashboard/cravings">
                    <Avatar>
                      <Icon>home</Icon>
                    </Avatar>
                    <ListItemText primary="Cravings" />
                  </ListItem>
                  <ListItem button component={Link} to="/dashboard/seminations">
                    <Avatar>
                      <Icon>home</Icon>
                    </Avatar>
                    <ListItemText primary="Seminations" />
                  </ListItem>
                  <ListItem button component={Link} to="/dashboard/heals">
                    <Avatar>
                      <Icon>heart</Icon>
                    </Avatar>
                    <ListItemText primary="Heals" />
                  </ListItem>
                </List> : null
              }
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
const mapStateToProps = state => ({
  member: state.member,
  ui: state.ui
});
const mapDispatchToProps = {
  colorize,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TemplateSidebar));
