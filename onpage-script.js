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

/**
 * FC Consent
 */
window.addEventListener('load', () => {
    const wrapper = document.querySelector('.fc-consent-root');
    if(!wrapper) {
        return;
    }

    const manageOptions = wrapper.querySelector('.fc-cta-manage-options');
    if(!manageOptions) {
        console.warn('[Cookie Crumbler] FC Consent detected but button not found');
        return;
    }

    manageOptions.click();

    const confirmButton = wrapper.querySelector('.fc-confirm-choices');
    if(!confirmButton) {
        console.warn('[Cookie Crumbler] FC Consent detected but save button not found');
        return;
    }

    confirmButton.click();

    console.log('[Cookie Crumbler] FC Consent detected and rejected');
})

/**
 * Shopify PC Banner
 */
window.addEventListener('load', () => {
    const rejectButton = document.querySelector('#shopify-pc__banner__btn-decline');
    if(!rejectButton) {
        return;
    }

    rejectButton.click();

    console.log('[Cookie Crumbler] Shopify PC Banner found and rejected');
});

/**
 * Cookie First
 */
window.addEventListener('load', () => {
    const rejectButton = document.querySelector('[data-cookiefirst-action="reject"]')
    if(!rejectButton) {
        return;
    }

    rejectButton.click();

    console.log('[Cookie Crumbler] CookieFirst consent banner rejected');
})

/**
 * Teavaro
 */
window.addEventListener('load', async () => {
    if(typeof window.Teavaro === 'undefined') {
        return;
    }

    let securityCounter = 10;
    let rejectButton = null;
    do {
        await new Promise(resolve => setTimeout(resolve, 1000));
        securityCounter--;

        rejectButton = document.querySelector('#teavaro_reject_button');
    } while (securityCounter > 0 && !rejectButton);

    if(!rejectButton) {
        console.warn('[Cookie Crumbler] Teavaro detected but no reject button found');
        return;
    }

    rejectButton.click();

    console.log('[Cookie Crumbler] Teavaro detected and rejected');
})