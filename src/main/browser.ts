import { app, BrowserWindow } from 'electron';
import { RegisterIPC } from './ipc';

declare const APP_WINDOW_WEBPACK_ENTRY: string;
declare const APP_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

export class Browser {
  public static createWindow(): BrowserWindow {
    const browserWindow = new BrowserWindow({
      width: 800,
      height: 600,
      show: false,
      frame: false,
      autoHideMenuBar: true,
      titleBarStyle: 'hidden',
      backgroundColor: '#202020',

      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        nodeIntegrationInWorker: false,
        nodeIntegrationInSubFrames: false,
        preload: APP_WINDOW_PRELOAD_WEBPACK_ENTRY,
        sandbox: false,
      },
    });
    browserWindow.loadURL(APP_WINDOW_WEBPACK_ENTRY);
    RegisterIPC();

    browserWindow.on('ready-to-show', () => browserWindow.show());
    browserWindow.on('close', () => app.quit());
    return browserWindow;
  }
}
