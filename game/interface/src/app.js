import {ipcRenderer} from "electron";
const ipc = ipcRenderer

/*const closeButton = document.getElementById('closeBTN');

closeButton.addEventListener('click', function () {
    console.log('close button clicked')
    ipc.send('closeApp')
})*/

export function closeApp() {
    ipc.send('closeApp')
}
