import {app, BrowserWindow} from 'electron';

class Ide {
    constructor() {

    }

    showSplashScreen() {
        if (!this.splash) {
            this.splash = new BrowserWindow({
                width: 698,
                height: 430,
                frame: false,
                show: false,
                focusable: false,
                alwaysOnTop: true
            });
            this.splash.loadURL('file://' + __dirname + '/data/img/splash.png');
        }

        this.splash.show();

        setTimeout(() => this.splash.close(), 3000);
    }

    static get() {
        if (process.type == 'main') {
            return global.ide;
        } else {
            return require('electron').remote.getGlobal('ide');
        }
    }
}

export default Ide;