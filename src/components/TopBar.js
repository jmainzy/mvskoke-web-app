import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Component } from 'react';

class TopBar extends Component {

  render() {
    return <AppBar color="primary" position="static">
      <Toolbar>
        <Typography variant="h6">
          Mvskoke Language
        </Typography>
      </Toolbar>
    </AppBar>
  }
}

export default TopBar;
