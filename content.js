console.log("[Cookie Crumbler] Cookie Crumbler active!");

/**
 * Borlabs Cookie
 */
window.addEventListener('borlabs-cookie-after-init', () => {
	const cookieBox = document.querySelector('#BorlabsCookieBox');
	if(!cookieBox) {
		return;
	}

	const attemptToRunBlocker = () => {
		const denyButton = cookieBox.querySelector('.brlbs-btn-accept-only-essential');
		if(!denyButton) {
			console.warn("[Cookie Crumbler] Accept only essential button not found");
			return false;
		}

		console.log("[Cookie Crumbler] Accept only essential button found");
		denyButton.click();

		return true;
	}

	const observer = new MutationObserver((mutations) => {
		if(attemptToRunBlocker()) {
			observer.disconnect();
		}
	});
	observer.observe(cookieBox, {
		childList: true,
		subtree: true
	});

});

/**
 * Usercentrics
 */
window.addEventListener('load', async () => {
	if(!window.Cookiebot) {
		return;
	}

	document.body.style.overflow = '';

	let securityCounter = 10;
	let denyButton = null;
	do {
		await new Promise(resolve => setTimeout(resolve, 1000));

		denyButton = document.querySelector('#CybotCookiebotDialogBodyButtonDecline');
	} while(securityCounter-- > 0 && !denyButton);

	if(!denyButton) {
		console.warn("[Cookie Crumbler] Usercentrics deny button not found");
		return;
	}

	denyButton.click();

	console.log("[Cookie Crumbler] Usercentrics deny button clicked");
});

/**
 * TrustArc
 */
window.addEventListener('load', async () => {
	const frame = document.querySelector('#trustarcNoticeFrame');
	if(!frame) {
		return;
	}

	console.log("[Cookie Crumbler] TrustArc detected, unable to interact with iframe content, hiding instead");
});

/**
 * CCM
 */
window.addEventListener('load', async () => {
	if(!window.ccm) {
		return;
	}

	const denyButton = document.querySelector('.ccm--decline-cookies');
	if(!denyButton) {
		console.warn("[Cookie Crumbler] CCM deny button not found");
		return;
	}

	denyButton.click();

	console.log("[Cookie Crumbler] CCM deny button clicked");
});

/**
 * Complianze
 */
window.addEventListener('load', async () => {
	const denyButton = document.querySelector('.cmplz-btn.cmplz-deny');
	if(!denyButton) {
		return;
	}

	denyButton.click();

	console.log("[Cookie Crumbler] Complianze deny button clicked");
});
