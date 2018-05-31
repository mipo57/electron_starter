import {app, BrowserWindow} from "electron";
import * as path from "path";
import * as url from "url"

  function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({width: 800, height: 600})
  
    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
    }))
  }
  
  app.on('ready', createWindow)