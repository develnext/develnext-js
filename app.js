import { app, BrowserWindow } from 'electron';
import Ide from './src/Ide';

let mainWindow = null;

global.ide = new Ide();

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    global.ide.showSplashScreen();

    mainWindow = new BrowserWindow({width: 800, height: 600});
    //mainWindow.setMenu(null);
    mainWindow.ide = global.ide;

    mainWindow.loadURL('file://' + __dirname + '/app.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});