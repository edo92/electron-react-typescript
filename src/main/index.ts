import { app } from 'electron';
import { Browser } from './browser';
import { RegisterIPC } from './ipc';

app.on('ready', () => {
  Browser.create(() => {
    RegisterIPC();
  });
});
