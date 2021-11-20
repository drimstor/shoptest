

let photos = [
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
