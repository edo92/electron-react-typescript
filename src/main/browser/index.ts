import { BrowserWindow, nativeImage, app } from 'electron';
import * as path from 'path';
import { Config } from './config';
import { TrayMenu } from './tray';

declare const APP_WINDOW_WEBPACK_ENTRY: string;

export class Browser {
  private tray: TrayMenu;

  private get browserWindow(): Electron.BrowserWindow {
    return BrowserWindow.getAllWindows()[0];
  }

  public static get windowCount(): number {
    return BrowserWindow.getAllWindows().length;
  }

  public get nativeIcon(): Electron.NativeImage {
    const iconIco = path.resolve('assets/images/logo.png');
    return nativeImage.createFromPath(iconIco);
  }

  public static create(callback?: () => void): BrowserWindow {
    const browser = new Browser();
    const _browser = browser.createBrowserWindow();
    callback && callback();
    return _browser;
  }

  private createTrayMenu(): void {
    if (this.tray) return;
    this.tray = new TrayMenu(this.nativeIcon);

    this.tray.toggle = () => {
      if (!this.browserWindow.isVisible()) {
        this.tray.showWindow();
      }
    };
    this.tray.create();
  }

  private createBrowserWindow(): BrowserWindow {
    if (this.browserWindow) return;

    const browserWindow = new BrowserWindow(new Config(this.nativeIcon));
    browserWindow.loadURL(APP_WINDOW_WEBPACK_ENTRY);
    this.createTrayMenu();

    browserWindow.on('ready-to-show', () => browserWindow.show());
    browserWindow.on('close', (event) => {
      app.dock.hide();
      browserWindow.hide();
      event.preventDefault();
    });
    return browserWindow;
  }
}
