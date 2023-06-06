import { app, BrowserWindow } from 'electron';
import { createAppWindow } from './window';

app.on('ready', createAppWindow);

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createAppWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
