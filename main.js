const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 900,
        webPreferences: {
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false,
        },
        icon: path.join(__dirname, 'icon.ico'), 
    });

    win.loadFile(path.join(__dirname, 'src', 'index.html'));
}

app.whenReady().then(() => {
    app.setAppUserModelId('sol_conversor');
    createWindow();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
