import { app, BrowserWindow } from 'electron';
import { Browser } from './browser';
import './ipc';

app.on('ready', Browser.createWindow);

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    Browser.createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
