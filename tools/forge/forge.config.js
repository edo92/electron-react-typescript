const path = require('path');
const rootDir = process.cwd();

module.exports = {
  packagerConfig: {
    asar: true,
    executableName: 'ERWT Boilerplate',
    appCopyright: 'Copyright (C) 2021 eduardJacobs',
    icon: path.resolve('assets/images/appIcon.ico'),
  },
  // Forge Makers
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'electron-react-typescript-webpack-2022',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-webpack',
      config: {
        devContentSecurityPolicy: `default-src 'self' 'unsafe-inline' data:; script-src 'self' 'unsafe-inline' data:`,
        port: 3000,
        loggerPort: 9000, // Logger port
        mainConfig: path.join(rootDir, 'tools/webpack/webpack.main.js'),
        renderer: {
          config: path.join(rootDir, 'tools/webpack/webpack.renderer.js'),
          entryPoints: [
            {
              name: 'app_window',
              rhmr: 'react-hot-loader/patch',
              html: path.join(rootDir, 'src/renderer/app.html'),
              js: path.join(rootDir, 'src/renderer/renderer.tsx'),
              preload: {
                js: path.join(rootDir, 'src/renderer/preload.tsx'),
              },
            },
          ],
        },
        devServer: {
          liveReload: false,
        },
      },
    },
  ],
};
