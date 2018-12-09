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
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "../config";

import theme from '../theme/index';
import DrawerHeader from "../components/DrawerHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";


const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


class TemplateSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  componentDidMount() {
    const style = document.createElement('style');
    style.innerHTML = 'body, html { padding: 0pt; margin: 0pt; height: 100%} body { background-color: #eee}';
    document.head.appendChild(style);
  }
  toggleDrawer = (open) => {
    this.setState({
      open,
    });
  }
  render = () => {
    const { children } = this.props;
    const { open } = this.state;
    console.log(this.state);
    return (
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    );
  }
}

TemplateSidebar.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default TemplateSidebar;
