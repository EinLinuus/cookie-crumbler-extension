/**
 * Osano
 */
(() => {
    if(typeof window.Osano === 'undefined') {
        return;
    }

    let rejected = false;
    window.Osano.cm.addEventListener('osano-cm-ui-changed', () => {
        if(rejected) {
            return;
        }

        const rejectButton = document.querySelector('.osano-cm-denyAll');
        if(!rejectButton) {
            console.warn('[Cookie Crumbler] Osano deny button not found');
            return;
        }

        rejectButton.click();
        rejected = true;

        console.log('[Cookie Crumbler] Osano consent banner rejected');
    })
})();
