console.log("inisde webviewerScripts.js");

window.webviewerFunctions = {
    initWebViewer: function () {
        const viewerElement = document.getElementById('viewer');
        WebViewer({
            path: 'js/lib',
            licenseKey: '', // sign up to get a key at https://dev.apryse.com
            initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf', // replace with your own PDF file
        }, viewerElement).then(instance => {
            // call apis here
        })
    }
};