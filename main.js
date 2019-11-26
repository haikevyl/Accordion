let acc = document.getElementsByClassName("accordion");

for(let i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function(event) {
		event.preventDefault();
		acc[i].classList.toggle('active');
		let panel = acc[i].nextElementSibling;
		if(panel.style.display === 'block') {
			panel.style.display = 'none'
		}else {
			panel.style.display = 'block'
		}
	})
	acc[i].addEventListener('blur', function() {
		 let panel = acc[i].nextElementSibling;
		 panel.style.display = 'none'
	})
}
