import { ipcRenderer, contextBridge } from 'electron';

const WindowApi = {
  greet: (message: any) => ipcRenderer.send('greet', message),
};

contextBridge.exposeInMainWorld('api', WindowApi);

export type API = typeof WindowApi;
