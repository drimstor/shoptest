let dropdownBtn = document.querySelector('.dropdown__button');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__list-item');
let dropdownInput = document.querySelector('.dropdown__input-hidden');

dropdownBtn.addEventListener('click', () => {
	dropdownList.classList.add('visible');
})


dropdownItems.forEach((listItem) => {
	listItem.addEventListener('click', (e) => {
		e.stopPropagation();
		dropdownList.classList.remove('visible')
		dropdownBtn.innerText = listItem.innerText;
		dropdownInput.value = listItem.dataset.value;
	})
})

document.addEventListener('click', (e) => {
	if (e.target !== dropdownBtn)  {
		dropdownList.classList.remove('visible');
	}
})

document.addEventListener('keydown', (e) => {
	if (e.key === 'Tab' || e.key === 'Escape')  {
		dropdownList.classList.remove('visible');
	}
})

  
/* ___________________________________________________________________ */


$(document).ready(function(){


	// Слайдер
	
		$('.slider').slick({
			arrows:true,
			dots:true,
			slidesToShow:1,
			autoplay:true,
			speed:1000,
			autoplaySpeed: 3000,
			// centerMode: true,
			responsive:[
				{
					breakpoint: 768,
					settings: {
						slidesToShow:1
					}
				},
				{
					breakpoint: 550,
					settings: {
						slidesToShow:1
					}
				}
			]
		});
	});
	