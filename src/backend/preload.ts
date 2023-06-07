import { ipcRenderer, contextBridge } from 'electron';

const API = {
  greet: (message: any) => ipcRenderer.invoke('greet', message),
};

contextBridge.exposeInMainWorld('api', API);

export type API = typeof API;
