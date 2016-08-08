import React from 'react'
import {render} from 'react-dom';
import App from 'components/app';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('app'));