import { ipcMain } from 'electron';

ipcMain.on('greet', <T>(event: Electron.IpcMainEvent, args: T) => {
  console.log('Event: ', event);
  console.log('Args: ', args);
});
