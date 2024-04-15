const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const deferredPrompt = window.deferredPrompt;
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const {outcome} = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            console.log('PWA installed successfully');
        } else {
            console.log('User cancelled PWA installation');
        }
        window.deferredPrompt = null;
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA has been installed');
});
