let total = 5000,
	time = 1,
	hourRate,
	tabLeft = document.querySelector('.tab-left'),
	tabRight = document.querySelector('.tab-right'),
	blocksBlock = document.getElementById('blocks-block'),
	pagesBlock = document.getElementById('pages-block'),
	counterBlock = document.getElementById('counter-block'),
	counterPages = document.getElementById('counter-pages'),
	counterHourse = document.getElementById('counter-hours'),
	counterRate = document.getElementById('counter-rate'),
	changesChack = document.getElementById('chenge-check'),
	cmsChack = document.getElementById('chenge-cms'),
	totalValue = document.getElementsByClassName('total-count')[0],
	input = document.getElementsByTagName('input');

	// СУММЫ

const   land = 5000,
		corp = 12000,
		cms = 4000,
		blocks = 500,
	    pages = 2500,
		chenges = 1000;

window.addEventListener('DOMContentLoaded', function(){

	tabLeft.addEventListener('click', () =>{
			// ОБНУЛЕНИЕ ИНПУТОВ
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		};
		//	ОТКРЫТИЕ ПУНКТА "КОЛИЧЕСТВО БЛОКОВ"
		blocksBlock.style.display = 'flex'; 
		// УБРАТЬ ПУНКТ "КОЛИЧЕСТВО СТРАНИЦ"
		pagesBlock.style.display = 'none';

		tabLeft.classList.add('active');
		tabRight.classList.remove('active');

		if (changesChack.checked) {
			changesChack.checked = false;
		};

		if (cmsChack.checked) {
			cmsChack.checked = false;
		};

		total = land;
		totalValue.value = total;

	} );


	tabRight.addEventListener('click', () =>{
			
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		};
		
		blocksBlock.style.display = 'none'; 
		pagesBlock.style.display = 'flex';

		tabRight.classList.add('active');
		tabLeft.classList.remove('active');

		if (changesChack.checked) {
			changesChack.checked = false;
		};

		if (cmsChack.checked) {
			cmsChack.checked = false;
		};

		total = corp;
		totalValue.value = total;

	} );

		//ДЛЯ ЛЕНДИНГА
	counterBlock.addEventListener('change', () => {
		//	ОЧИСТКА ПОЛЕЙ  
		counterHourse.value = '';//"СКОЛЬКО ЧАСОВ НА ПРОЕКТ"
		counterRate.value = '';// "СТОИМОСТЬ ВАШЕГО ЧАСА"

		total = counterBlock.value * blocks;
		totalValue.value = total;

		});



		// ДЛЯ СТРАНИЦ	
	counterPages.addEventListener('change', () => {
		//	ОЧИСТКА ПОЛЕЙ  
		counterHourse.value = '';//"СКОЛЬКО ЧАСОВ НА ПРОЕКТ"
		counterRate.value = '';// "СТОИМОСТЬ ВАШЕГО ЧАСА"

		total = counterPages.value * pages;
		totalValue.value = total;

		});
	

	 	// РАСЧЕТ ПО ВРЕМЕНИ
		counterHourse.addEventListener('change', () => {

			counterBlock.value = '';
			counterPages.value = '';
			total = 0;
			time = counterHourse.value;
			hourRate = time * counterRate.value;
			totalValue.value = hourRate;
			total = hourRate;
		});


		counterRate.addEventListener('change', () => {

			counterBlock.value = '';
			counterPages.value = '';
			total = 0;
			hourRate = time * counterRate.value;
			totalValue.value = hourRate;
			total = hourRate;
 			
		});


		changesChack.addEventListener('change', () => {

			if (changesChack.checked) {
				total += chenges;
				totalValue.value = total;
			}else {
				total -= chenges;
				totalValue.value = total;
			}
		});


		cmsChack.addEventListener('change', () => {

			if (cmsChack.checked) {
				total += cms;
				totalValue.value = total;
			}else {
				total -= cms;
				totalValue.value = total;
			}
		});

});

