const photos = [
	'img/jeans.png',
	'img/jeans2.png',
	'img/jeans.png',
	'img/jeans2.png',
	'img/jeans.png',
	'img/jeans2.png'
  ];
  
  
  let previews = document.querySelectorAll('.item__preview-mini');
  let fullPhoto = document.querySelector('.full-photo');

  
  fullPhoto.addEventListener('click', (e) => {
	e.preventDefault();
  })


  let addThumbnailClickHandler = (preview, photo) => {
	preview.addEventListener('mouseover', (e) => {
		for (let i = 0; i < previews.length; i++){
		  if (previews[i].classList.contains('active')) {
			  previews[i].classList.remove('active')
		  }
		}
		e.preventDefault();
		fullPhoto.src = photo;
		preview.classList.add('active')
	});
  };
 
  for (let i = 0; i < previews.length; i++) {
	addThumbnailClickHandler(previews[i], photos[i]);
  }

  
  
/* ___________________________________________________________________ */

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