import React from 'react';
import ReactDOM from 'react-dom';
//import { app, BrowserWindow } from 'electron';

import Ide from './Ide';

window.onload = () => {

    ReactDOM.render(
        <h1 onClick={(e) => Ide.get().showSplashScreen()}>DevelNext JS</h1>,
        document.getElementById('app')
    );
};