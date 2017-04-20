function benchmark() {
	const startAt = new Date();
	console.info('TTI', 'waiting...');

	const findGrid = () => {
		const list = document.querySelector('.murals-list');
		const endAt = new Date();
		const delta = (endAt - startAt) / 1000;
		if (!list) {
			if (delta > 60) {
				console.log('TTI', `gave up after ${delta}s`);
				clearInterval(interval);
			}
			return;
		}
		clearInterval(interval);
		console.log('TTI', `${delta}s`);
	};

	const interval = setInterval(findGrid, 10);
}

if (window.location.href.indexOf('tti=1') != -1) benchmark();
