import { app } from 'electron';
import { Browser } from './browser';

app.on('ready', Browser.create);

app.on('activate', () => {
  if (!Browser.windowCount) {
    Browser.create();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
