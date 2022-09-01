const {
    app,
    BrowserWindow,
    Menu,
    shell
} = require('electron')

const createWindow = () => {
    const window = new BrowserWindow({
        width: 760,
        height: 500,
    })
    window.loadURL("http://localhost:3000")
}

const menuItems = [{
    label: "File",
    submenu: [{
            label: "Learn More"
        },
        {
            role: "close"
        },
        {
            type: 'separator'
        }, {
            label: "Exit",
            click: () => app.quit()
        },
        {
            label: "Open In Browser",
            click: () => shell.openExternal("https://slack.com/intl/en-in/")
        },
        {
            label: "New Window",
            click: () => createWindow()
        }
    ]
}, {
    label: "Edit",
    submenu: [{
        label: "Undo"
    }, {
        label: "Redo"
    }, {
        type: 'separator'
    }, {
        label: "Cut"
    }, {
        label: "Copy"
    }, {
        label: "Paste"
    }, {
        type: 'separator'
    }, {
        label: "Find"
    }]
}, {
    label: "View",
    submenu: [{
        role: "reload"
    }, {
        role: "zoomIn"
    }, {
        role: "zoomOut"
    }, {
        role: "resetZoom"
    }]
}, {
    label: "Window",
    submenu: [{
        role: "minimize"
    }]
}]

const menu = Menu.buildFromTemplate(menuItems)
Menu.setApplicationMenu(menu)

app.whenReady().then(() => {
    createWindow()
})